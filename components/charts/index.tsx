// import bitcoinData from "@/constants/bitcoinData";
// import currencyStore from "@/stores/currency.store";
// import { flex, fonts, styles } from "@/styles";
// import { formatCurrency } from "@/utils";
// import { useState } from "react";
// import { Dimensions, View, Text, StyleSheet } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { CandlestickChart } from "react-native-wagmi-charts";
// import { useStore } from "zustand";

import bitcoinData from "@/constants/bitcoinData";
import { Dimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CandlestickChart } from "react-native-wagmi-charts";
import ChartHeader from "./chart-header";

// export default function Chart() {
// 	const { currency } = useStore(currencyStore);
// 	const [showLabel, setShowLabel] = useState(false);

// 	return (
// 		<>
// 			<GestureHandlerRootView style={{ height: 460 }}>
// 				<View style={{ flex: 1 }}>
// 					{!showLabel && (
// 						<View
// 							style={{
// 								paddingVertical: 16,
// 								paddingHorizontal: 16,
// 							}}
// 						>
// 							<Text style={{ ...styles.text, fontSize: 14 }}>
// 								Bitcoin Price
// 							</Text>
// 							<Text style={{ ...styles.text, fontSize: 20, fontWeight: 700 }}>
// 								Rp1,245,000
// 							</Text>
// 						</View>
// 					)}

// 					<CandlestickChart.Provider data={bitcoinData}>
// 						{showLabel && (
// 							<View
// 								style={{
// 									...flex.flexRow,
// 									padding: 16,
// 								}}
// 							>
// 								<View style={flex.flexRow}>
// 									<Text style={{ ...styles.text, ...fonts.bold }}>Open</Text>
// 									<CandlestickChart.PriceText
// 										type="open"
// 										style={{ color: "#fff" }}
// 									/>
// 								</View>

// 								<View style={flex.flexRow}>
// 									<Text style={{ ...styles.text, ...fonts.bold }}>High</Text>
// 									<CandlestickChart.PriceText
// 										type="high"
// 										style={{ color: "#fff" }}
// 									/>
// 								</View>
// 							</View>
// 						)}

// 						{showLabel && (
// 							<View
// 								style={{
// 									...flex.flexRow,
// 									paddingVertical: 8,
// 									paddingHorizontal: 16,
// 								}}
// 							>
// 								<View style={flex.flexRow}>
// 									<Text style={{ ...styles.text, ...fonts.bold }}>Close</Text>
// 									<CandlestickChart.PriceText
// 										type="close"
// 										style={{ color: "#fff" }}
// 									/>
// 								</View>

// 								<View style={flex.flexRow}>
// 									<Text style={{ ...styles.text, ...fonts.bold }}>Low</Text>
// 									<CandlestickChart.PriceText
// 										type="low"
// 										style={{ color: "#fff" }}
// 									/>
// 								</View>
// 							</View>
// 						)}

// 						<CandlestickChart
// 							width={Dimensions.get("window").width}
// 							onTouchStart={() => setShowLabel(true)}
// 						>
// 							<CandlestickChart.Candles />
// 							<CandlestickChart.Crosshair
// 								onCancelled={() => setShowLabel(false)}
// 								onEnded={() => setShowLabel(false)}
// 								onFailed={() => setShowLabel(false)}
// 							/>
// 						</CandlestickChart>
// 					</CandlestickChart.Provider>
// 				</View>
// 			</GestureHandlerRootView>

// 			<View style={chartStyle.minimumPriceWrapper}>
// 				<Text style={styles.text}>{currency?.symbol} minimum transaction</Text>
// 				<Text style={{ ...styles.text, ...fonts.bold }}>
// 					{formatCurrency(currency?.trade_min_base_currency as number)}
// 				</Text>
// 			</View>
// 		</>
// 	);
// }

// const chartStyle = StyleSheet.create({
// 	minimumPriceWrapper: {
// 		backgroundColor: "rgba(0,0, 0, 1",
// 		paddingVertical: 16,
// 		paddingHorizontal: 16,
// 		display: "flex",
// 		flexDirection: "row",
// 		gap: 8,
// 		borderTopWidth: 1,
// 		borderBottomWidth: 1,
// 		borderColor: "#333",
// 	},
// });

export default function Chart() {
	return (
		<GestureHandlerRootView>
			<CandlestickChart.Provider
				data={bitcoinData}
				width={Dimensions.get("window").width}
			>
				<ChartHeader />
				<CandlestickChart height={360}>
					<CandlestickChart.Candles />
					<CandlestickChart.Crosshair />
				</CandlestickChart>
			</CandlestickChart.Provider>
		</GestureHandlerRootView>
	);
}
