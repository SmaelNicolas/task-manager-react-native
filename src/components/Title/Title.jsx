import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Title = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Task Manager</Text>
		</View>
	);
};
