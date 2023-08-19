import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {useLoginMutation} from './services/login';
import {useAppDispatch} from '@/hooks/redux.hooks';
import {setToken} from './slices/auth.slice';
import {Button} from '@rneui/themed';

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, {isLoading, isError, isSuccess}] = useLoginMutation();

  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await login({username, password});
      dispatch(setToken(response));
    } catch (error) {
      console.error('login failed', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.loginText}>Login</Text>
        <View>
          <Text>username: kminchelle</Text>
          <Text>password: 0lelplR (zero one e one p one R)</Text>
        </View>
      </View>
      <View style={styles.formSection}>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUserName}
            style={styles.input}
            autoCapitalize={'none'}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize={'none'}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Button title={'Login'} onPress={handleLogin} disabled={isLoading} />

        <Text> {isError ? 'Error' : 'No error'} </Text>
        <Text> {isSuccess ? 'Success' : 'No success'} </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
