import useTicker from "@/hooks/useTicker";
import { flex, fonts, styles } from "@/styles";
import { formatCurrency } from "@/utils";
import { View, Text } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";

const ViewBasic = () => {
	const { ticker } = useTicker();
	return (
		<View
			style={{
				paddingVertical: 16,
				paddingHorizontal: 16,
			}}
		>
			<Text style={{ ...styles.text, fontSize: 14 }}>Bitcoin Price</Text>
			<Text style={{ ...styles.text, fontSize: 20, fontWeight: 700 }}>
				{formatCurrency(ticker as number)}
			</Text>
		</View>
	);
};

const ViewPrice = () => {
	return (
		<>
			<View
				style={{
					...flex.flexRow,
					padding: 16,
					paddingBottom: 0,
				}}
			>
				<View style={flex.flexRow}>
					<Text style={{ ...styles.text, ...fonts.bold }}>Open</Text>
					<CandlestickChart.PriceText type="open" style={{ color: "#fff" }} />
				</View>

				<View style={flex.flexRow}>
					<Text style={{ ...styles.text, ...fonts.bold }}>High</Text>
					<CandlestickChart.PriceText type="high" style={{ color: "#fff" }} />
				</View>
			</View>

			<View
				style={{
					...flex.flexRow,
					padding: 16,
					paddingTop: 0,
				}}
			>
				<View style={flex.flexRow}>
					<Text style={{ ...styles.text, ...fonts.bold }}>Close</Text>
					<CandlestickChart.PriceText type="close" style={{ color: "#fff" }} />
				</View>

				<View style={flex.flexRow}>
					<Text style={{ ...styles.text, ...fonts.bold }}>Low</Text>
					<CandlestickChart.PriceText type="low" style={{ color: "#fff" }} />
				</View>
			</View>
		</>
	);
};

export default function ChartHeader({ show }: { show: boolean }) {
	return <View style={{}}>{show ? <ViewPrice /> : <ViewBasic />}</View>;
}
