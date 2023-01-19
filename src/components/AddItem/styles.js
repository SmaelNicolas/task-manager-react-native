import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
	inputContainer: {
		alignItems: "center",
		backgroundColor: colors.secondary,
		borderRadius: 4,
		flexDirection: "column",
		height: 120,
		justifyContent: "space-between",
		marginHorizontal: 20,
		marginTop: 50,
		paddingVertical: 10,
		width: "90%",
	},
	input: {
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		color: colors.black,
		height: 40,
		width: "100%",
		paddingHorizontal: 10,
	},
	buttonContainer: {
		width: "50%",
	},
});
