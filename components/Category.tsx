import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import ItemCategory from './ItemCategory';
import CheckedToDoList from './CheckedToDoList';
import { IList, IToDo } from '../interfaces';

const Category = ({ item }: IList) => {
	const [ openList, setOpenList ] = useState(false);

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title_text}>{item.title}</Text>
			</View>
			{item.todos.map((item: IToDo) => {
				if (!item.checked) {
					return <ItemCategory key={item.id} item={item} />;
				}
				return null;
			})}
			<View>
				<TouchableOpacity onPress={() => setOpenList(!openList)}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						{openList ? (
							<AntDesign name="up" size={18} color="grey" style={{ marginRight: 10 }} />
						) : (
							<AntDesign name="down" size={18} color="grey" style={{ marginRight: 10 }} />
						)}
						<Text style={styles.text}>Завершенные</Text>
					</View>
				</TouchableOpacity>
				{openList && <CheckedToDoList todos={item.todos} />}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20
	},
	title_text: {
		textTransform: 'uppercase'
	},
	text: {
		fontSize: 18,
		margin: 10,
		fontWeight: 'bold'
	}
});

export default Category;
