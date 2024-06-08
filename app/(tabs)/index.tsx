// import { View, Text } from "react-native";
// import Chart from "@/components/charts";
// import { styles } from "@/styles";
// import { CandlestickChart } from "react-native-wagmi-charts";

import Chart from "@/components/charts";
import { View, Text } from "react-native";

// export default function HomeScreen() {
// 	return (
// 		<View style={{ flex: 1 }}>
// 			{/* <View style={{ padding: 16 }}>
// 				<Text
// 					style={{
// 						color: "#fff",
// 						fontWeight: "bold",
// 						fontSize: 16,
// 						paddingBottom: 8,
// 					}}
// 				>
// 					About Bitcoin
// 				</Text>

// 				<Text
// 					style={{
// 						color: "#fff",
// 						lineHeight: 18,
// 						paddingBottom: 8,
// 						textAlign: "justify",
// 					}}
// 				>
// 					Bitcoin (BTC) is the worrld's first cryptocurrency. Created in 2009,
// 					BTC is stored and traded on the global internet using distributed
// 					digital ledger (Bitcoin Blockcchain). BTC can be divided into a
// 					smaller unit called Satoshi, wherer 1 BTC = 100 million Satoshi.
// 				</Text>

// 				<Text
// 					style={{
// 						color: "#fff",
// 						lineHeight: 18,
// 						textAlign: "justify",
// 						paddingBottom: 16,
// 					}}
// 				>
// 					There are ~18.3 milliion BTC in circulation, with 12.5 new BTC added
// 					(mined) every 10 minutes. BTC maximum supply is limited to 21 million
// 					BTC. Due to the limite dsupply, the price of BTC has risen 2300%
// 					between January 2015 to January 2020, prompting many people to invest
// 					in BTC.
// 				</Text>

// 				<Text style={{ fontSize: 14, color: "blue", fontWeight: "bold" }}>
// 					Official Website
// 				</Text>
// 			</View> */}
// 		</View>
// 	);
// }

export default function Homepage() {
	return (
		<View>
			<Chart />
		</View>
	);
}
