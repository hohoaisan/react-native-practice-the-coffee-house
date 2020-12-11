import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FeaturedMenu from './FeaturedMenu';
import BeverageMenu from './BeverageMenu';
import FoodMenu from './FoodMenu';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabScreen = () => {
  const tabs = useMemo(() => [
    {
      component: FeaturedMenu,
      name: 'FeaturedMenu',
      title: 'Phổ biến',
      options: {},
    },
    {
      component: BeverageMenu,
      name: 'BeverageMenu',
      title: 'Đồ uống',
      options: {},
    },
    {
      component: FoodMenu,
      name: 'FoodMenu',
      title: 'Thức ăn',
      options: {},
    },
    {
      component: SearchScreen,
      name: 'SearchScreen',
      title: 'Tìm kiếm',
      options: {},
    },
  ]);
  return (
    <Tab.Navigator>
      {tabs.map(({component, name, title, options}, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={component}
          options={{
            headerShown: false,
            title: title ? title : name,
            ...options,
          }}></Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};
const OrderPlacing = () => {
  const screens = useMemo(() => [
    {
      component: TabScreen,
      name: 'TabScreen',
      options: {},
    },
    {
      component: CartScreen,
      name: 'CartScreen',
      title: 'Giỏ hàng',
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

export default OrderPlacing;
