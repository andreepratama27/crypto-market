import bitcoinData from "@/constants/bitcoinData";
import { View, Text, ScrollView, Button, Dimensions } from "react-native";
import {
	CandlestickChart,
	CandlestickChartProvider,
} from "react-native-wagmi-charts";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
	return (
		<View style={{ flex: 1 }}>
			<GestureHandlerRootView>
				<View style={{ flex: 1 }}>
					<CandlestickChart.Provider data={bitcoinData}>
						<CandlestickChart width={Dimensions.get("window").width}>
							<CandlestickChart.Candles />
							<CandlestickChart.Crosshair />
						</CandlestickChart>
						<CandlestickChart.PriceText type="open" style={{ color: "#fff" }} />
						<CandlestickChart.PriceText type="high" style={{ color: "#fff" }} />
						<CandlestickChart.PriceText type="low" style={{ color: "#fff" }} />
						<CandlestickChart.PriceText
							type="close"
							style={{ color: "#fff" }}
						/>
						<CandlestickChart.DatetimeText style={{ color: "#fff" }} />
					</CandlestickChart.Provider>
				</View>
			</GestureHandlerRootView>
			{/* <CandlestickChart.Provider data={bitcoinData}>
				<ScrollView
					style={{
						flex: 1,
						padding: 0,
						margin: 0,
						position: "relative",
						paddingBottom: 500,
					}}
				>
					<GestureHandlerRootView>
						<View style={{ marginHorizontal: 10 }}>
							<CandlestickChart
								height={300}
								width={Dimensions.get("window").width - 20}
								onTouchStart={() => {}}
							>
								<CandlestickChart.Candles />
								<CandlestickChart.Crosshair>
									<CandlestickChart.Tooltip />
								</CandlestickChart.Crosshair>
							</CandlestickChart>
						</View>
					</GestureHandlerRootView>
				</ScrollView>
			</CandlestickChart.Provider> */}
			<View style={{ padding: 16 }}>
				<Text
					style={{
						color: "#fff",
						fontWeight: "bold",
						fontSize: 16,
						paddingBottom: 8,
					}}
				>
					About Bitcoin
				</Text>

				<Text
					style={{
						color: "#fff",
						lineHeight: 18,
						paddingBottom: 8,
						textAlign: "justify",
					}}
				>
					Bitcoin (BTC) is the worrld's first cryptocurrency. Created in 2009,
					BTC is stored and traded on the global internet using distributed
					digital ledger (Bitcoin Blockcchain). BTC can be divided into a
					smaller unit called Satoshi, wherer 1 BTC = 100 million Satoshi.
				</Text>

				<Text
					style={{
						color: "#fff",
						lineHeight: 18,
						textAlign: "justify",
						paddingBottom: 16,
					}}
				>
					There are ~18.3 milliion BTC in circulation, with 12.5 new BTC added
					(mined) every 10 minutes. BTC maximum supply is limited to 21 million
					BTC. Due to the limite dsupply, the price of BTC has risen 2300%
					between January 2015 to January 2020, prompting many people to invest
					in BTC.
				</Text>

				<Text style={{ fontSize: 14, color: "blue", fontWeight: "bold" }}>
					Official Website
				</Text>
			</View>
		</View>
	);
}
