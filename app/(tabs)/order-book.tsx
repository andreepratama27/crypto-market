import orderStore from "@/stores/order.store";
import { flex } from "@/styles";
import { formatCurrency } from "@/utils";
import { FlatList, Text, View, Image } from "react-native";
import { useStore } from "zustand";

export default function OrderBookScreen() {
	const { orders } = useStore(orderStore);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={orders}
				renderItem={({ item }) => (
					<View
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
						key={item.symbol}
					>
						<Image
							source={{ uri: item.logo }}
							style={{ width: 35, height: 35 }}
						/>
						<View
							style={{
								...flex.flexRow,
								justifyContent: "space-between",
								width: "85%",
							}}
						>
							<Text style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}>
								{item.symbol}
							</Text>

							<Text style={{ color: "#dadada", fontSize: 16, fontWeight: 300 }}>
								{formatCurrency(item.amount)}
							</Text>

							<View
								style={{
									backgroundColor: item.type === "buy" ? "green" : "red",
									paddingVertical: 4,
									paddingHorizontal: 8,
									borderRadius: 2,
								}}
							>
								<Text style={{ color: "#fff", textTransform: "capitalize" }}>
									{item.type}
								</Text>
							</View>
						</View>
					</View>
				)}
			/>
		</View>
	);
}
