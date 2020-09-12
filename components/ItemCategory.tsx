import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch } from 'react-redux';
import { checkedToDo, deleteToDo } from '../screens/Home/reducer/actions';
import { useNavigation } from '@react-navigation/native';

export default function ItemCategory({ item }) {

	const navigation = useNavigation()

	const dispatch = useDispatch()

	const deleteTodo = () => {
		dispatch(deleteToDo(item.id))
	}

	const LeftAction = () => (
		<TouchableOpacity style={styles.button_left_action} onPress={()=>navigation.navigate('EditToDo', {item})}>
			<Feather name="edit-3" size={18} color="grey" />
		</TouchableOpacity>
	);

	const RightAction = () => (
		<TouchableOpacity style={styles.button_right_action} onPress={()=>deleteTodo()}>
			<AntDesign name="delete" size={18} color="red" />
		</TouchableOpacity>
	);

	return (
		<Swipeable
			renderLeftActions={LeftAction}
			renderRightActions={RightAction}
			friction={2}
			leftThreshold={30}
			rightThreshold={40}
		>
			<TouchableOpacity onPress={() => dispatch(checkedToDo(item.id, item.list_id, item.checked))} style={styles.button}>
				<Entypo name="circle" size={18} color="grey" style={{ marginRight: 10 }} />
				<Text style={styles.text}>{item.text}</Text>
			</TouchableOpacity>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	button_left_action: {
		justifyContent: 'center',
		paddingRight: 20,
		marginRight: 20,
		borderRightWidth: 1,
		borderColor:'#CCCCCC'
	},
	button_right_action: {
		justifyContent: 'center',
		paddingLeft: 20,
		marginLeft: 20,
		borderLeftWidth: 1,
		borderColor: '#CCCCCC',
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		fontSize: 18,
		margin: 10,fontWeight:'bold'
	}
});
