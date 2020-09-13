import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { IStateToDo, StackParamList } from '../../interfaces';
import { Appbar } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { updateCategory } from './reducer/action';

type EditCategoryScreenRouteProp = RouteProp<StackParamList, 'EditCategory'>

export default function EditCategory() {
	const route = useRoute<EditCategoryScreenRouteProp>();
	const dispatch = useDispatch();
	const [ inputValue, setInputValue ] = useState(route.params.item.title);
	const [ disabled, setDisabled ] = useState(false);
	const navigation = useNavigation();

	useEffect(
		() => {
			inputValue.trim() == '' ? setDisabled(true) : setDisabled(false);
		},
		[ inputValue ]
	);

	const lists = useSelector<IStateToDo, IStateToDo['lists']>((state) => state.lists);

	const update = () => {
		if (inputValue == route.params.item.title) {
			navigation.goBack();
		} else {
			dispatch(updateCategory(route.params.item.id, inputValue));
			navigation.goBack();
		}
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
		color: 'grey',
		fontWeight: 'bold'
	},
	radio_button: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title_radio_button: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});
