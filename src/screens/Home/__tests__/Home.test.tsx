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

const navigation = useNavigation();
const route: RouteProp<RootStackParam, 'Home'> = {
  key: 'Testing-home',
  name: 'Home',
};

describe('Home Screen', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home navigation={navigation} route={route} />
      </Provider>,
    );
  });

  it('renders without error', () => {});

  it('should display the counter value', async () => {
    expect(screen.getByTestId('counter-value').props.children).toBe(0);
  });
});

describe('Counter', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home navigation={navigation} route={route} />
      </Provider>,
    );
  });

  /**
   * @cases
   *  - checks functionality of the counter
   * */
  describe('Initial Cases', () => {
    it('should increment the counter value', () => {
      fireEvent.press(screen.getByTestId('increment-counter-button'));
      expect(screen.getByTestId('counter-value').props.children).toBe(1);
    });

    it('should increment the counter value by 5', () => {
      fireEvent.press(screen.getByTestId('incrementBy5-counter-button'));
      expect(screen.getByTestId('counter-value').props.children).toBe(6);
    });

    it('should decrement the counter value', () => {
      fireEvent.press(screen.getByTestId('decrement-counter-button'));
      expect(screen.getByTestId('counter-value').props.children).toBe(5);
    });
  });
});
