import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function OrderPlacing() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>OrderPlacing!</Text>
    </View>
  );
}
function ShopMap() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ShopMap!</Text>
    </View>
  );
}
function Account() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    component: HomeScreen,
    title: 'Trang chủ',
    name: 'HomeScreen',
    icon: 'newspaper-outline',
  },
  {
    component: OrderPlacing,
    name: 'OrderPlacing',
    title: 'Đặt hàng',
    icon: 'cafe-outline',
  },
  {
    component: ShopMap,
    title: 'Cửa hàng',
    name: 'ShopMap',
    icon: 'home-outline',
  },
  {
    component: Account,
    title: 'Tài khoản',
    name: 'Account',
    icon: 'person-outline',
  },
];
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="HomeScreen"
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          {tabScreens.map((item, index) => (
            <Tab.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{
                tabBarLabel: item.title,
                tabBarIcon: ({color, size}) => (
                  <Ionicons name={item.icon} size={size} color={color} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
