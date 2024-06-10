import currencyStore from "@/stores/currency.store";
import orderStore from "@/stores/order.store";
import { flex, fonts } from "@/styles";
import { formatCurrency } from "@/utils";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Modal,
	TextInput,
} from "react-native";
import { useStore } from "zustand";

const ModalTransaction = ({
	visible = false,
	onSubmit,
}: { visible: boolean; onSubmit: (price: string) => void }) => {
	const { currency } = useStore(currencyStore);
	const [price, setPrice] = useState("");

	return (
		<Modal animationType="slide" transparent visible={visible}>
			<View
				style={{
					width: 350,
					height: 180,
					borderRadius: 8,
					margin: "auto",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#fff",
				}}
			>
				<View
					style={{
						padding: 20,
						width: "100%",
						height: "100%",
					}}
				>
					<Text style={{ fontWeight: "bold", marginBottom: 16 }}>
						Buy {currency?.symbol}
					</Text>

					<TextInput
						value={price}
						onChangeText={(text) => setPrice(text)}
						placeholder="Enter Amount"
						placeholderTextColor="#dadada"
						keyboardType="numeric"
						style={{
							borderRadius: 4,
							borderColor: "#dadada",
							width: "100%",
							borderWidth: 1,
							paddingVertical: 10,
							paddingHorizontal: 10,
						}}
					/>

					<TouchableOpacity
						onPress={() => {
							onSubmit(price);
							setPrice("");
						}}
						style={{
							marginTop: 14,
							width: "100%",
							padding: 14,
							borderRadius: 4,
							backgroundColor: "blue",
						}}
					>
						<Text
							style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
						>
							Submit
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default function ChartAction() {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const [type, setType] = useState("");

	const { ticker } = useStore(currencyStore);
	const { currency } = useStore(currencyStore);
	const { setOrder } = useStore(orderStore);

	const handleOrder = (price: string) => {
		const payload = {
			symbol: currency?.symbol as string,
			logo: currency?.url_logo_png as string,
			amount: Number(price),
			type,
		};

		setOrder(payload);
		setShow(false);

		setTimeout(() => {
			router.navigate("/order-book");
		}, 1000);
	};

	return (
		<View style={styles.buttonWrapper}>
			<View>
				<Text
					style={{
						fontWeight: 500,
						fontSize: 16,
						color: "#fff",
						textAlign: "center",
						marginBottom: 8,
					}}
				>
					{formatCurrency(Number(ticker?.buy))}
				</Text>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setType("buy");
						setShow(true);
					}}
				>
					<Text
						style={{
							fontWeight: 500,
							fontSize: 16,
							color: "#fff",
							textAlign: "center",
						}}
					>
						Buy
					</Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text
					style={{
						fontWeight: 500,
						fontSize: 16,
						color: "#fff",
						textAlign: "center",
						marginBottom: 8,
					}}
				>
					{formatCurrency(Number(ticker?.sell))}
				</Text>

				<TouchableOpacity
					style={{ ...styles.button, backgroundColor: "red" }}
					onPress={() => {
						setType("sell");
						setShow(true);
					}}
				>
					<Text
						style={{
							fontWeight: 500,
							fontSize: 16,
							color: "#fff",
							textAlign: "center",
						}}
					>
						Sell
					</Text>
				</TouchableOpacity>
			</View>

			<ModalTransaction visible={show} onSubmit={handleOrder} />
		</View>
	);
}

const styles = StyleSheet.create({
	buttonWrapper: {
		padding: 24,
		borderWidth: 1,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 24,
	},
	button: {
		backgroundColor: "blue",
		width: 120,
		textAlign: "center",
		padding: 14,
		borderRadius: 8,
	},
});
