import {RootStackParam} from '@/navigation/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = StackScreenProps<RootStackParam, 'Notifications'>;

const Notifications = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Notifications</Text>
      </View>
      <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      <Button onPress={() => navigation.navigate('Profile')}>Go To Profile</Button>
    </SafeAreaView>
  );
};

export default Notifications;
