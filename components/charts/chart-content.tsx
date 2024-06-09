import type { Currency } from "@/stores/currency.store";
import currencyStore from "@/stores/currency.store";
import { fonts, styles } from "@/styles";
import { formatCurrency } from "@/utils";
import { StyleSheet, View, Text } from "react-native";
import { useStore } from "zustand";

export default function ChartContent() {
	const { currency } = useStore(currencyStore);

	return (
		<View style={chartContentStyle.minimumPriceWrapper}>
			<Text style={styles.text}>{currency?.symbol} minimum transaction</Text>
			<Text style={{ ...styles.text, ...fonts.bold }}>
				{formatCurrency(currency?.trade_min_base_currency as number)}
			</Text>
		</View>
	);
}

const chartContentStyle = StyleSheet.create({
	minimumPriceWrapper: {
		backgroundColor: "rgba(0,0, 0, 1",
		paddingVertical: 16,
		paddingHorizontal: 16,
		display: "flex",
		flexDirection: "row",
		gap: 8,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#333",
	},
});
