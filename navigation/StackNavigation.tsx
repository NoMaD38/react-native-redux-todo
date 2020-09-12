import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import AddToDo from '../screens/AddToDo/AddToDo';
import EditToDo from '../screens/EditToDo/EditToDo';

const Stack = createStackNavigator();

export default function StackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AddToDo" component={AddToDo} />
				<Stack.Screen name="EditToDo" component={EditToDo}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
