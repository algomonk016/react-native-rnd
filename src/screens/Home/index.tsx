import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text} from 'react-native';
import React from 'react';

// navigation
import {RootStackParam} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

// sections
import {Counter, Pokemon} from './section';

type Props = StackScreenProps<RootStackParam, 'Home'>;

/**
 * @component
 * Represents the Home screen of the mobile app.
 *
 * This component displays a counter and allows the user to increment, decrement, and update the counter value.
 * It also fetches data about a Pokemon from an external API and displays the Pokemon's name, weight, height, and order.
 * The component uses Redux for state management and React Navigation for navigation between screens.
 *
 */

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.mainPage}>
      <Text style={styles.headerText}>Home</Text>

      <Counter />
      <Pokemon />

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
