import {
	Button,
	Image,
	Modal,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { colors } from "../../../theme/colors";
import { TaskItem } from "../../Task/TaskItem/TaskItem";
import { styles } from "./styles";

export const CustomModal = ({
	isModalVisible,
	setIsModalVisible,
	onHandleDelete,
	onHandleStatus,
	selectedTask,
}) => {
	return (
		<Modal animationType="slide" visible={isModalVisible}>
			<TouchableOpacity
				onPress={() => setIsModalVisible(!isModalVisible)}
				style={styles.modalClose}>
				<Text style={styles.modalCloseTitle}>Close Modal</Text>
			</TouchableOpacity>
			<View style={styles.modalContainer}>
				<Text style={styles.ownerTask}>Created by</Text>
				<Image
					style={styles.modalImage}
					source={{
						uri: `https://i.pravatar.cc/${selectedTask.id}`,
					}}
				/>
				<Text style={styles.modalId}>Task id {selectedTask.id}</Text>
				<Text style={styles.modalId}>
					Date created : {selectedTask.date}
				</Text>
				<View style={styles.modalValueContainer}>
					<Text style={styles.modalValue}>{selectedTask.value}</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						title={
							selectedTask.complete
								? "Put In Progress"
								: "Complete Task"
						}
						color={colors.success}
						onPress={() => onHandleStatus(selectedTask)}
					/>
					<Button
						title="Delete Task"
						color={colors.warn}
						onPress={onHandleDelete}
					/>
				</View>
			</View>
		</Modal>
	);
};
