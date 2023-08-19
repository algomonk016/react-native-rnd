import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import React from 'react';

// navigation
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParam} from '@/navigation/types';
import {useAppSelector} from '@/hooks/redux.hooks';
import {styles} from './styles';

type Props = BottomTabScreenProps<BottomNavigatorParam, 'Profile'>;

const Profile = ({navigation}: Props) => {
  const {id, username} = useAppSelector(state => state.auth);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Profile</Text>

        <View>
          <Text style={styles.text}>id: {id}</Text>
          <Text style={styles.text}>username: {username}</Text>
        </View>

        <Button onPress={() => navigation.navigate('HomeStack')}> Home </Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
