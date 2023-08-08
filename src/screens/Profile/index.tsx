import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import React from 'react';

// navigation
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParam} from '@/navigation/types';

type Props = BottomTabScreenProps<BottomNavigatorParam, 'Profile'>;

const Profile = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Profile</Text>
        <Button onPress={() => navigation.navigate('HomeStack')}> Home </Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
