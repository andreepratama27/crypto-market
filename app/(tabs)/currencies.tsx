import currencyStore, { Currency } from "@/stores/currency.store";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useStore } from "zustand";

export default function Currencies() {
	const router = useRouter();
	const { currencies, setCurrency } = useStore(currencyStore);

	const handleSetCurrency = (currencyItem: Currency) => {
		setCurrency(currencyItem);

		router.navigate("/");
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FlatList
				data={currencies}
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
