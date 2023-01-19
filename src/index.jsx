import { useState } from "react";
import { Keyboard, StatusBar, StyleSheet, View } from "react-native";
import { AddItem, CustomModal, TaskList, Title } from "./components";
import { styles } from "./styles";

export const App = () => {
	const [task, setTask] = useState();
	const [tasks, setTasks] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState({});

	const onHandlerChange = (text) => {
		setTask(text);
	};

	const onHandlerSubmit = () => {
		setTasks([
			...tasks,
			{
				id: (Math.floor(Math.random() * 300) + 1).toString(),
				value: task,
				complete: false,
				date: new Date().toDateString(),
			},
		]);
		setTask("");
		Keyboard.dismiss();
	};

	const onHandleModal = (item) => {
		setSelectedTask(item);
		changeModalStatus();
	};

	const onHandleDelete = () => {
		setTasks((prevTaskList) =>
			prevTaskList.filter((task) => task.id !== selectedTask.id)
		);
		changeModalStatus();
	};

	const onHandleStatus = (task) => {
		task.complete = !task.complete;
		changeModalStatus();
	};

	const changeModalStatus = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<>
			<View style={styles.container}>
				<Title />
				<AddItem
					buttonText={"Add task"}
					onHandlerChange={onHandlerChange}
					onHandlerSubmit={onHandlerSubmit}
					placeholder={"Create a new task"}
					task={task}
				/>
				<TaskList onHandleModal={onHandleModal} tasks={tasks} />
				<CustomModal
					isModalVisible={isModalVisible}
					onHandleDelete={onHandleDelete}
					onHandleStatus={onHandleStatus}
					selectedTask={selectedTask}
					setIsModalVisible={setIsModalVisible}
				/>
			</View>
			<StatusBar />
		</>
	);
};
