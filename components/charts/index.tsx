import bitcoinData from "@/constants/bitcoinData";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CandlestickChart } from "react-native-wagmi-charts";
import ChartHeader from "./chart-header";
import { useState } from "react";

export default function Chart() {
	const [showLabel, setShowLabel] = useState(false);

	return (
		<GestureHandlerRootView>
			<CandlestickChart.Provider
				data={bitcoinData}
				width={Dimensions.get("window").width}
				height={400}
			>
				<ChartHeader show={showLabel} />
				<CandlestickChart height={400} onTouchStart={() => setShowLabel(true)}>
					<CandlestickChart.Candles />
					<CandlestickChart.Crosshair
						onFailed={() => setShowLabel(false)}
						onEnded={() => setShowLabel(false)}
						onCancelled={() => setShowLabel(false)}
					/>
				</CandlestickChart>
			</CandlestickChart.Provider>
		</GestureHandlerRootView>
	);
}
