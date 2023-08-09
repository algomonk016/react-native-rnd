import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// navigation
import {RootStackParam} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

// redux state
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hooks';
import {increment, decrement, update} from './slices/counter.slice';

// rtk
import {useGetPokemonByNameQuery} from './services/pokemon';

type Props = StackScreenProps<RootStackParam, 'Home'>;

const Home = ({navigation}: Props) => {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  const [pokemon, setPokemon] = useState<string>('');

  // rtk-query
  // will be fetched when the pokemon state is set, otherwise skip
  const {data, error, isLoading} = useGetPokemonByNameQuery(pokemon, {
    skip: !pokemon,
    selectFromResult: result => result, // can be used to filter/modify the api response
    pollingInterval: 10000, // interval(ms) to automatically refetch data
    refetchOnFocus: false,
    refetchOnMountOrArgChange: false,
    refetchOnReconnect: false,
  });

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

      <View style={styles.container}>
        <Text onPress={() => setPokemon('bulbasaur')} style={styles.headerText}>
          Pokemon:{' '}
        </Text>
        <Text> {isLoading ? 'Loading' : 'Loaded'} </Text>

        <View>
          {Boolean(error) ? (
            <View>
              <Text>{JSON.stringify(error)}</Text>
            </View>
          ) : (
            <View>
              <Text> Name: {data?.name} </Text>
              <Text> Weight: {data?.weight} </Text>
              <Text> Height: {data?.height} </Text>
              <Text> Order: {data?.order} </Text>
            </View>
          )}
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
