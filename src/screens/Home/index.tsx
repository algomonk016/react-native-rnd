import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import React from 'react';

// navigation
import {RootStackParam} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<RootStackParam, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Home</Text>
      </View>
      <Button onPress={() => navigation.push('Notifications', {name: 'Random Name'})}>
        Go to notifications
      </Button>
    </SafeAreaView>
  );
};

export default Home;
