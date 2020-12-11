import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({children, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.touchAbleContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: '#ff664a',
    borderWidth: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  touchAbleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ff664a',
    fontSize: 13,
  },
});
export default Button;
