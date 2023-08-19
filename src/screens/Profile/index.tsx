import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';
import React from 'react';

// navigation
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParam} from '@/navigation/types';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hooks';
import {styles} from './styles';
import {clearToken} from '../Login/slices/auth.slice';
import {clearCount} from '../Home/slices/counter.slice';

type Props = BottomTabScreenProps<BottomNavigatorParam, 'Profile'>;

const Profile = ({navigation}: Props) => {
  const {id, username} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const logout = () => {
    dispatch(clearCount());
    dispatch(clearToken());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Profile</Text>

        <View>
          <Text style={styles.text}>id: {id}</Text>
          <Text style={styles.text}>username: {username}</Text>
        </View>

        <Button style={styles.button} onPress={() => navigation.navigate('HomeStack')}>
          {' '}
          Home{' '}
        </Button>
        <Button style={styles.button} onPress={logout}>
          {' '}
          Logout{' '}
        </Button>
        <Button style={styles.button} onPress={() => dispatch(clearCount())}>
          {' '}
          Clear Count{' '}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
