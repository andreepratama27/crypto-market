import { Stack, useRouter } from "expo-router";
import { ChevronDown } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";
import {
	GestureHandlerRootView,
	TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
	const router = useRouter();

	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerTitle: () => (
					<GestureHandlerRootView style={{}}>
						<TouchableOpacity onPress={() => router.push("/currencies")}>
							<View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
								<Text style={{ color: "#fff", fontSize: 17, fontWeight: 600 }}>
									Bitcoin
								</Text>
								<ChevronDown color="#fff" />
							</View>
						</TouchableOpacity>
					</GestureHandlerRootView>
				),
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Home",
				}}
			/>

			<Stack.Screen
				name="currencies"
				options={{
					header: () => (
						<SafeAreaView style={{}}>
							<Text
								style={{
									color: "#fff",
									textAlign: "center",
									fontSize: 17,
									fontWeight: 600,
								}}
							>
								Currencies
							</Text>
						</SafeAreaView>
					),
				}}
			/>

			<Stack.Screen
				name="order-book"
				options={{
					header: () => (
						<SafeAreaView style={{}}>
							<Text
								style={{
									color: "#fff",
									textAlign: "center",
									fontSize: 17,
									fontWeight: 600,
								}}
							>
								Order Book
							</Text>
						</SafeAreaView>
					),
				}}
			/>
		</Stack>
	);
}
