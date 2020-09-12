import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, RadioButton, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IStateToDo, IToDo } from '../../interfaces';
import { Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateToDo } from '../Home/reducer/actions';

export default function EditToDo() {
	const [ buttonValue, setButtonValue ] = useState('');
    const route = useRoute();
    const dispatch = useDispatch();
	const [ inputValue, setInputValue ] = useState(route.params.item.text);
	const [ disabled, setDisabled ] = useState(false);
	const navigation = useNavigation();

	useEffect(
		() => {
			inputValue.trim() == '' || buttonValue == '' ? setDisabled(true) : setDisabled(false);
		},
		[ buttonValue, inputValue ]
	);

    const lists = useSelector<IStateToDo, IStateToDo['lists']>((state) => state.lists);
    
    useEffect(()=>{
        const index = lists.findIndex(i=>i.id == route.params.item.list_id)
        setButtonValue(lists[index].id.toString())
    },[])

	const update = () => {
        const list_id = parseInt(buttonValue)
        const todo_id = route.params.item.id
		const todo: {} = {
            text: inputValue,
            list_id: list_id
		};
		    dispatch(updateToDo(route.params.item.list_id, todo_id, todo))
		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Appbar.Header style={styles.header_container}>
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title="" />
				<Appbar.Action icon="check" color="blue" onPress={() => update()} disabled={disabled} />
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
								<RadioButton value={`${item.id}`} color="blue" />
							</View>
						)
					)}
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
