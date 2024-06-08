import { StyleSheet } from "react-native";

const colors = {
	white: "#fff",
};

const fonts = StyleSheet.create({
	bold: {
		fontWeight: 700,
	},
});

const flex = StyleSheet.create({
	flexRow: {
		display: "flex",
		flexDirection: "row",
		gap: 4,
		alignItems: "center",
	},
});

const styles = StyleSheet.create({
	text: {
		color: colors.white,
	},
});

export { styles, fonts, flex };
