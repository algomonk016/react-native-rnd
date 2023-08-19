/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC} from 'react';
import {ThemeProvider} from '@rneui/themed';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './theme';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Text} from 'react-native';
import {useAppSelector} from './hooks/redux.hooks';

const RouteContainer: FC = () => {
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Navigation isLoggedIn={isAuthenticated} />
    </NavigationContainer>
  );
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouteContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
