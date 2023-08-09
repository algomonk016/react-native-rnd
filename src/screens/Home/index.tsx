import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {RootStackParam} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

// redux state
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hooks';
import {increment, decrement, update} from './slices/counter.slice';

// exporting reducers
export * as Counter from './slices/counter.slice';

type Props = StackScreenProps<RootStackParam, 'Home'>;

const Home = ({navigation}: Props) => {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  // updating the states
  const decrementByOne = () => dispatch(decrement());
  const incrementByOne = () => dispatch(increment());
  const add5 = () => dispatch(update(5));

  return (
    <SafeAreaView style={styles.mainPage}>
      <Text style={styles.headerText}>Home</Text>

      <View style={styles.container}>
        <Text style={styles.headerText}>Counter </Text>
        <View>
          <Text style={[styles.headerText, {textAlign: 'center'}]}> {count.value} </Text>
          <View style={styles.flexBox}>
            <Button style={styles.button} title={'-1'} onPress={decrementByOne} />
            <Button style={styles.button} title={'+1'} onPress={incrementByOne} />
            <Button style={styles.button} title={'+5'} onPress={add5} />
          </View>
        </View>
      </View>

      <Button
        onPress={() => navigation.push('Notifications', {name: 'Random Name'})}
        style={styles.container}>
        Go to notifications
      </Button>
    </SafeAreaView>
  );
};

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

export default Home;
