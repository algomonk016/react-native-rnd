/**
 * @format
 */
import {Home} from '@/screens';
import React from 'react';
import 'react-native';

// testing
import {describe, it} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';

// redux
import {store} from '@/store';
import {Provider} from 'react-redux';
import {decrement, increment, update} from '../slices/counter.slice';

// navigation
import {useNavigation} from '@/../jest/__mocks__/react-navigation';
import {RootStackParam} from '@/navigation/types';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

const route: RouteProp<RootStackParam, 'Home'> = {
  key: 'Testing-home',
  name: 'Home',
};

const navigation = useNavigation();

describe('Home Screen Functions', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <NavigationContainer>
          <Home navigation={navigation} route={route} />
        </NavigationContainer>
      </Provider>,
    );
  });

  describe('Counter Functions', () => {
    /**
     * @cases
     *  - checks function calls of the counter
     * */

    // Create a mock function to track dispatched actions
    const mockDispatch = jest.fn();

    // Mock the store's dispatch method with the mock function
    store.dispatch = mockDispatch;

    describe('Initial Cases', () => {
      it('should increment the counter value', () => {
        const incrementButton = screen.getByTestId('increment-counter-button');
        fireEvent.press(incrementButton);

        expect(mockDispatch).toBeCalledWith(increment());
      });

      it('should increment the counter value by 5', () => {
        const add5Button = screen.getByTestId('incrementBy5-counter-button');
        fireEvent.press(add5Button);

        expect(mockDispatch).toBeCalledWith(update(5));
      });

      it('should call decrementByOne when "Decrement" button is clicked', () => {
        const decrementButton = screen.getByTestId('decrement-counter-button');
        fireEvent.press(decrementButton);

        expect(mockDispatch).toHaveBeenCalledWith(decrement());
      });
    });
  });

  describe('Home Screen Functions', () => {
    it('should call "goToNavigationScreen" when "Go to notifications" button is pressed', () => {
      const notificationsButton = screen.getByText('Go to notifications');
      fireEvent.press(notificationsButton);

      expect(navigation.push).toHaveBeenCalledWith('Notifications', {name: 'Random Name'});
    });
  });
});
