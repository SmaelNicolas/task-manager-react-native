import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const TaskItem = ({ item, onHandleModal }) => {
	return (
		<TouchableOpacity
			style={
				item.complete
					? {
							...styles.itemContainer,
							...styles.itemContainerComplete,
					  }
					: styles.itemContainer
			}
			onPress={() => onHandleModal(item)}>
			<Text
				style={
					item.complete
						? {
								...styles.itemList,
								...styles.itemListComplete,
						  }
						: styles.itemList
				}>
				{item.value}
			</Text>
			<Text>{item.complete ? "✅" : "🕓"}</Text>
		</TouchableOpacity>
	);
};
