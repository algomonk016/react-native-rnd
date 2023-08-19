import {Button} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {decrement, increment, update} from '../slices/counter.slice';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hooks';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter);

  // updating the states
  const decrementByOne = () => dispatch(decrement());
  const incrementByOne = () => dispatch(increment());
  const add5 = () => {
    dispatch(update(5));
    consoleCounterValue();
  };

  const consoleCounterValue = () => {
    console.log('value', count);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Counter </Text>
      <View>
        <Text testID="counter-value" style={[styles.headerText, {textAlign: 'center'}]}>
          {count.value}
        </Text>
        <View style={styles.flexBox}>
          <Button
            testID="decrement-counter-button"
            style={styles.button}
            title={'-1'}
            onPress={decrementByOne}
          />
          <Button
            testID="increment-counter-button"
            style={styles.button}
            title={'+1'}
            onPress={incrementByOne}
          />
          <Button
            testID="incrementBy5-counter-button"
            style={styles.button}
            title={'+5'}
            onPress={add5}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    padding: 10,
  },
  button: {
    margin: 5,
  },
  container: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
