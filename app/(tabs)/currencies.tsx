import { getCurrencies } from "@/services/currency.service";
import { useQuery } from "@tanstack/react-query";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

export default function Currencies() {
	const data = useQuery({
		queryKey: ["get-currencies"],
		queryFn: getCurrencies,
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			{/* <Text style={{ color: "#fff" }}>{JSON.stringify(data.data)}</Text> */}
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
