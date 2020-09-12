import React from 'react';
import { View } from 'react-native';
import ItemChecked from './ItemChecked';

export default function CheckedToDoList({ todos }) {
	return <View>{todos.map((item) => item.checked && <ItemChecked key={item.id} item={item} />)}</View>;
}
