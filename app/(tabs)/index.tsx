import Chart from "@/components/charts";
import ChartContent from "@/components/charts/chart-content";
import { View, Text } from "react-native";

export default function Homepage() {
	return (
		<View>
			<View style={{ height: 480 }}>
				<Chart />
			</View>
			<ChartContent />
		</View>
	);
}
