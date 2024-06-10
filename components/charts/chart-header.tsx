import useTicker from "@/hooks/useTicker";
import currencyStore from "@/stores/currency.store";
import { flex, fonts, styles } from "@/styles";
import { formatCurrency } from "@/utils";
import { View, Text } from "react-native";
import { CandlestickChart } from "react-native-wagmi-charts";
import { useStore } from "zustand";

const ViewBasic = () => {
	const { currency, ticker: tickerState } = useStore(currencyStore);

	return (
		<View
			style={{
				paddingVertical: 16,
				paddingHorizontal: 16,
			}}
		>
			<Text
				style={{ ...styles.text, fontSize: 14, textTransform: "capitalize" }}
			>
				{currency?.coingecko_id} Price
			</Text>
			<Text style={{ ...styles.text, fontSize: 20, fontWeight: 700 }}>
				{formatCurrency(Number(tickerState?.sell))}
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
