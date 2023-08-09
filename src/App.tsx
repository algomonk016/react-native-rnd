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
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigation isLoggedIn={true} />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
