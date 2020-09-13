import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function HeaderHome({backgroundSheet}: any) {
	return (
		<Appbar.Header style={styles.header_container}>
			<Appbar.Content title="Задачи" />
			<Appbar.Action icon="shape-outline" onPress={() => backgroundSheet()} />
		</Appbar.Header>
	);
}

const styles = StyleSheet.create({
	header_container:{
		elevation: 0, 
		marginBottom: 20,
		marginLeft:50,
		fontWeight:'bold'
	}
});
