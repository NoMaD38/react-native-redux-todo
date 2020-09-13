import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, RadioButton, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IStateToDo, IToDo } from '../../interfaces';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { addTodo } from './reducer/action';

export default function AddToDo() {
	const [ buttonValue, setButtonValue ] = useState('');
	const [ inputValue, setInputValue ] = useState('');
	const [ disabled, setDisabled ] = useState(false);

	useEffect(
		() => {
			inputValue.trim() == '' || buttonValue == '' ? setDisabled(true) : setDisabled(false);
		},
		[ buttonValue, inputValue ]
	);

	const lists = useSelector<IStateToDo, IStateToDo['lists']>((state) => state.lists);

	const dispatch = useDispatch();

	const navigation = useNavigation();

	const addtodo = () => {
		const todo: {} = {
			id: Date.now(),
			text: inputValue,
			checked: false
		};
		dispatch(addTodo(buttonValue, todo));
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Appbar.Header style={styles.header_container}>
				<Appbar.BackAction color='grey' onPress={() => navigation.goBack()} />
				<Appbar.Content title="" />
				<Appbar.Action icon="check" color="#0099FF" onPress={() => addtodo()} disabled={disabled}/>
			</Appbar.Header>
			<View style={styles.body}>
				<TextInput
					placeholder="Название задачи"
					mode="outlined"
					style={styles.input}
					value={inputValue}
					onChangeText={(e) => setInputValue(e)}
				/>
				<Text style={styles.title_category}>категория</Text>
				<RadioButton.Group onValueChange={(value) => setButtonValue(value)} value={buttonValue}>
					{lists.map((item) => (
						<View style={styles.radio_button} key={item.id}>
							<Text style={styles.title_radio_button}>{item.title}</Text>
							<RadioButton value={`${item.id}`} color="#0099FF" />
						</View>
					))}
				</RadioButton.Group>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	header_container: {
		elevation: 0
	},
	body: {
		marginHorizontal: 20
	},
	input: {
		width: '100%',
		backgroundColor: 'white',
		fontSize: 25,
		marginBottom: 20,
		borderWidth: 0,
		elevation: 0,
		fontWeight: 'bold'
	},
	title_category: {
		textTransform: 'uppercase',
		marginBottom: 20,
		color:'grey',
		fontWeight:'bold'
	},
	radio_button: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title_radio_button: {
		fontSize: 18,
		fontWeight:'bold'
	}
});
