import Chart from "@/components/charts";
import ChartContent from "@/components/charts/chart-content";
import { getCurrencies } from "@/services/currency.service";
import currencyStore from "@/stores/currency.store";
import { useEffect } from "react";
import { View } from "react-native";
import { useStore } from "zustand";

export default function Homepage() {
	const { initCurrencies, setCurrency } = useStore(currencyStore)

	const fetchCurrency = async () => {
		const currencies = await getCurrencies()

		initCurrencies(currencies)
		setCurrency(currencies[0])
	}

	useEffect(() => {
		fetchCurrency()
	}, [])

	return (
		<View>
			<View style={{ height: 480 }}>
				<Chart />
			</View>
			<ChartContent />
		</View>
	);
}
