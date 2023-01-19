import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
	itemContainer: {
		alignItems: "center",
		backgroundColor: colors.background,
		borderRadius: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
		width: "100%",
	},
	itemContainerComplete: {
		borderColor: colors.success,
		borderWidth: 1,
	},
	itemList: {
		color: colors.white,
		fontSize: 14,
		fontWeight: "500",
		letterSpacing: 0.7,
		textTransform: "capitalize",
		width: "90%",
	},
	itemListComplete: {
		color: colors.success,
	},
});
