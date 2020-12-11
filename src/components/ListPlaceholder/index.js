import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ListPlaceholder = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
      <Ionicons name="cafe-outline" size={50} />
      <Text>Chilling...</Text>
    </View>
  );
};
export default ListPlaceholder;
