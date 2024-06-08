import { getCurrencies } from "@/services/currency.service";
import currencyStore, { Currency } from "@/stores/currency.store";
import { styles } from "@/styles";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useStore } from "zustand";

export default function Currencies() {
	const router = useRouter();
	const { setCurrency } = useStore(currencyStore);

	const data = useQuery({
		queryKey: ["get-currencies"],
		queryFn: getCurrencies,
	});

	const handleSetCurrency = (currencyItem: Currency) => {
		setCurrency(currencyItem);

		router.navigate("/");
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FlatList
				data={data.data}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{
							flex: 1,
							height: 58,
							paddingHorizontal: 16,
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
							borderBottomWidth: 1,
							borderBottomColor: "#333",
						}}
						key={item.id}
						onPress={() => handleSetCurrency(item)}
					>
						<Image
							source={{ uri: item.url_logo_png }}
							style={{ width: 35, height: 35 }}
						/>
						<View>
							<Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>
								{item.traded_currency_unit}
							</Text>
							<Text style={{ color: "#dadada", fontSize: 12, fontWeight: 300 }}>
								{item.symbol}
							</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</GestureHandlerRootView>
	);
}
