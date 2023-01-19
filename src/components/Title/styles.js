import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		elevation: 1,
		backgroundColor: colors.background,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
		color: colors.white,
		textTransform: "uppercase",
	},
});
