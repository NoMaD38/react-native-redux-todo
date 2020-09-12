import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { IList } from '../interfaces';
import { addList, deleteList } from '../screens/Home/reducer/actions';

export default function BottomSheetRenderContent({ lists }) {
	const dispatch = useDispatch();
	const [ value, setValue ] = useState('');
	const [disabled, setdisabled] = useState(true)

	const addCategory = () => {
		const category: IList = {
			id: Date.now(),
			title: value,
			todos: []
		}
		dispatch(addList(category))
		setValue('')
	}

	const deleteCategory = (id: Number) => {
		dispatch(deleteList(id))
	}

	useEffect(()=>{
		value.trim() == '' ? setdisabled(true) : setdisabled(false)
	},[value])

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{lists.map((item: IList) => (
					<View style={styles.category} key={item.id}>
						<Text style={{ fontSize: 18, fontWeight:'bold' }}>{item.title}</Text>
						<TouchableOpacity onPress={()=> deleteCategory(item.id)}>
							<AntDesign name="delete" size={18} color="red" />
						</TouchableOpacity>
					</View>
				))}
			</ScrollView>
			<View style={styles.input_container}>
				<TextInput
					value={value}
					onChangeText={(e) => setValue(e)}
					placeholder="Новая категория"
					mode="outlined"
					style={styles.input}
				/>
				<TouchableOpacity onPress={()=>addCategory()} disabled={disabled}>
					<AntDesign name="plus" size={20} color="grey" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderColor: 'rgba(0,0,0,0.2)',
		backgroundColor: 'white',
		paddingTop: 16,
		paddingHorizontal: 20,
		height: '100%',
		flexDirection: 'column'
	},
	category: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20
	},
	input_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		alignItems: 'center'
	},
	input: {
		width: '90%',
		height: 18,
		backgroundColor: 'white',
		fontSize: 18,
		marginLeft: -15,
		borderWidth: 0,
		fontWeight:'bold'
	}
});
