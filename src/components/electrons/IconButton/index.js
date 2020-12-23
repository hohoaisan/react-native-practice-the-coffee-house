import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton = ({iconname, size, onPress, style, color, padding}) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: size,
      width: size + padding,
      height: size + padding,
      overflow: 'hidden',
    },
    touchAbleContainer: {
      width: size + padding,
      height: size + padding,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#ff664a',
      fontSize: 13,
    },
  });
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.touchAbleContainer]}>
          <Ionicons name={iconname} size={size} color={color}></Ionicons>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
IconButton.defaultProps = {
  size: 20,
  padding: 5,
};

export default IconButton;
