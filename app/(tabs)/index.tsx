import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={{ color: "#fff" }}>Home Screen</Text>
		</SafeAreaView>
	);
}
