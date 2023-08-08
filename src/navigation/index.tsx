import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {AuthStackParam, BottomNavigatorParam, Props, RootStackParam} from './types';
import {Home, Login, Notifications, Profile, Register} from '@/screens';

/**
 * Wrapper Component for navigation
 * If Logged in
 *    - show main app
 *    - go to auth stack
 * */
const Navigate = (props: Props) => {
  const {isLoggedIn} = props;
  return isLoggedIn ? <LoggedInScreens /> : <AuthScreens />;
};

/**
 * Auth Stack
 * Screens:
 *  Login
 *  Signup
 * */

const AuthStack = createStackNavigator<AuthStackParam>();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Register} />
    </AuthStack.Navigator>
  );
};

/**
 * Home Stack
 * Screens:
 *  Home
 *  Notifications
 */

const HomeStack = createStackNavigator<RootStackParam>();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
    </HomeStack.Navigator>
  );
};

/**
 * Bottom Tabs
 * Screens:
 *  HomeStack
 *  Profile
 */
const Tab = createBottomTabNavigator<BottomNavigatorParam>();
const LoggedInScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStack" component={HomeStackScreens} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Navigate;
