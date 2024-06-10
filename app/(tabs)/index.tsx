import Chart from "@/components/charts";
import ChartAction from "@/components/charts/chart-action";
import ChartContent from "@/components/charts/chart-content";
import useTicker from "@/hooks/useTicker";
import { getCurrencies } from "@/services/currency.service";
import currencyStore from "@/stores/currency.store";
import { useEffect } from "react";
import { Button, View } from "react-native";
import { useStore } from "zustand";

export default function Homepage() {
	useTicker();
	const { initCurrencies, setCurrency } = useStore(currencyStore);

	const fetchCurrency = async () => {
		const currencies = await getCurrencies();

		initCurrencies(currencies);
		setCurrency(currencies[0]);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCurrency();
	}, []);

	return (
		<View>
			<View style={{ height: 480 }}>
				<Chart />
			</View>
			<ChartContent />
			<ChartAction />
		</View>
	);
}
