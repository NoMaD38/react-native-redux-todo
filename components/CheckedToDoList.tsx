import React from 'react';
import { View } from 'react-native';
import { IList, IToDo } from '../interfaces';
import ItemChecked from './ItemChecked';

export default function CheckedToDoList({ todos }:IList) {
	return <View>{todos.map((item: IToDo) => item.checked && <ItemChecked key={item.id} item={item} />)}</View>;
}
