import React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './store';

// const fontConfig = {
// 	default: {
// 		regular: {
// 			fontFamily: 'sans-serif',
// 			fontWeight: 'normal'
// 		},
// 		medium: {
// 			fontFamily: 'sans-serif-medium',
// 			fontWeight: 'normal'
// 		},
// 		light: {
// 			fontFamily: 'sans-serif-light',
// 			fontWeight: 'normal'
// 		},
// 		thin: {
// 			fontFamily: 'sans-serif-thin',
// 			fontWeight: 'normal'
// 		}
// 	}
// };

const theme = {
	...DefaultTheme,
	// fonts: configureFonts(fontConfig),
	colors: {
		...DefaultTheme.colors,
		primary: 'white',
		accent: 'yellow'
	}
};

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={theme}>
				<StackNavigator />
			</PaperProvider>
		</Provider>
	);
}
