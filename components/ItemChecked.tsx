import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { checkedToDo } from '../screens/Home/reducer/actions';
import { IToDo } from '../interfaces';

export default function ItemChecked({item}:IToDo) {

    const dispatch = useDispatch()

	return (
		<TouchableOpacity style={styles.button} onPress={()=>dispatch(checkedToDo(item.id, item.list_id, item.checked))}>
			<AntDesign name="check" size={18} color="#0099FF" style={{ marginRight: 10 }} />
			<Text style={styles.title}>{item.text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 18,
		margin: 10,
		textDecorationLine: 'line-through',
		fontWeight:'bold',
		color:'grey'
	}
});
