import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

function HomeScreen() {
  const screens = useMemo(() => [
    {
      component: MainScreen,
      name: 'MainScreen',
      title: 'Trang chủ',
      options: {},
    },
  ]);
  return (
    <Stack.Navigator>
      {screens.map(({component, name, title, options}, index) => (
        <Stack.Screen
          key={index}
          name={name}
          component={component}
          options={{
            headerShown: false,
            title: title ? title : name,
            ...options,
          }}></Stack.Screen>
      ))}
    </Stack.Navigator>
  );
}

export default HomeScreen;
