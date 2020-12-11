import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput as Input} from 'react-native';
const TextInput = ({title, children, disabled, onChangeText}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopColor: 'lightgray',
        borderTopWidth: 1,
        paddingVertical: 5,
      }}>
      <View style={[styles.container]}>
        <View>
          <Text style={{color: 'gray', fontSize: 12}}>{title}</Text>
        </View>
        <View>
          <Input
            style={{padding: 0, color: 'black'}}
            value={children}
            editable={!disabled}
            onChangeText={onChangeText}></Input>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
export default TextInput;
