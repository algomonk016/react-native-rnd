/**
 * @format
 */
import 'react-native';
import React from 'react';
import {Home} from '@/screens';

// Note: import explicitly to use the types shiped with jest.
import {it, describe} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';
import {RootStackParam} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@/../jest/__mocks__/react-navigation';
import {Provider} from 'react-redux';
import {store} from '@/store';
import {decrement, increment, update} from '../slices/counter.slice';

const navigation = useNavigation();
const route: RouteProp<RootStackParam, 'Home'> = {
  key: 'Testing-home',
  name: 'Home',
};

// Mock useNavigation with the module factory
jest.mock('@/../jest/__mocks__/react-navigation', () => ({
  useNavigation: jest.fn(),
}));

describe('Home Screen Functions', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home navigation={navigation} route={route} />
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

  // describe('Home Screen Functions', () => {
  //   it('should navigate to Notifications screen when "Go to notifications" button is pressed', () => {
  //     // Create a mock for the navigation object
  //     const mockNavigation = {
  //       push: jest.fn(),
  //     };

  //     // Mock the useNavigation function to return the mock navigation object
  //     (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

  //     render(
  //       <Provider store={store}>
  //         <Home navigation={navigation} route={route} />
  //       </Provider>
  //     );

  //     // Simulate button press
  //     fireEvent.press(screen.getByRole('button', { name: 'Go to notifications' }));

  //     // Assert that navigation.push was called with the correct parameters
  //     expect(mockNavigation.push).toHaveBeenCalledWith('Notifications', { name: 'Random Name' });
  //   });
  // });
});
