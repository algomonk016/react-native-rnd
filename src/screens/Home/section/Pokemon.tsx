import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetPokemonByNameQuery} from '../services/pokemon';

const Pokemon = () => {
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

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Pokemon;

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
