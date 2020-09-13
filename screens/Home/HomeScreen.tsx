import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Category from '../../components/Category';
import { Value } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ButtonAddToDo from '../../components/ButtonAddToDo';
import BottomSheetRenderContent from '../../components/BottomSheetRenderContent';
import HeaderHome from '../../components/HeaderHome';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './reducer/actions';
import { IStateToDo } from '../../interfaces';

const HomeScreen = () => {
	const sheetRef = useRef();
	const isOpen = new Value(1);
	const [ visibleBackground, setVisibleBackgroud ] = useState(false);

	const lists = useSelector<IStateToDo, IStateToDo['lists']>((state) => state.lists);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadData());
	}, []);

	const backgroundSheet = () => {
		if (visibleBackground) {
			sheetRef.current.snapTo(1);
			setVisibleBackgroud(false);
		} else {
			sheetRef.current.snapTo(0);
			setVisibleBackgroud(true);
		}
	};

	return (
		<View style={styles.container}>
			{visibleBackground && <TouchableOpacity style={styles.backgroundSheet} onPress={() => backgroundSheet()} />}
			<BottomSheet
				ref={sheetRef}
				snapPoints={[ 200, 0 ]}
				initialSnap={1}
				callbackNode={isOpen}
				borderRadius={10}
				renderContent={() => <BottomSheetRenderContent lists={lists} />}
				enabledContentGestureInteraction={false}
				enabledInnerScrolling={true}
			/>
			<HeaderHome backgroundSheet={backgroundSheet} />
			<FlatList
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
				data={lists}
				renderItem={({ item }) => <Category item={item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
			<ButtonAddToDo />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	backgroundSheet: {
		...StyleSheet.absoluteFill,
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 1
	},
	scrollView: {
		marginHorizontal: 20
	}
});

export default HomeScreen;
