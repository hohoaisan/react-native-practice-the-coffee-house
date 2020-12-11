import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from './MapScreen';
const Stack = createStackNavigator();

const ShopMap = ({navigation}) => {
  const screens = useMemo(() => [
    {
      component: MapScreen,
      name: 'MapScreen',
      title: 'Bản đồ cửa hàng',
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
};

export default ShopMap;
