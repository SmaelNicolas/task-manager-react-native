import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
	modalClose: {
		width: "100%",
		padding: 15,
		backgroundColor: colors.background,
		borderBottomColor: colors.success,
		borderBottomWidth: 1,
	},
	modalCloseTitle: {
		textAlign: "right",
		color: colors.secondary,
	},
	modalContainer: {
		width: "100%",
		height: "100%",
		backgroundColor: colors.background,
		justifyContent: "flex-start",
		flexDirection: "column",
		alignItems: "center",
		padding: 20,
	},
	modalId: {
		fontSize: 14,
		textTransform: "uppercase",
		color: colors.secondary,
	},
	modalValueContainer: {
		width: "85%",
		paddingVertical: 10,
	},
	modalValue: {
		fontSize: 14,
		textTransform: "capitalize",
		color: colors.secondary,
		padding: 5,
	},
	modalButtonContainer: {
		width: "85%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 30,
	},
});
