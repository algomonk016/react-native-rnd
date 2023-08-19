/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './theme';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Text} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigation isLoggedIn={true} />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
