import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import IconButton from '../../components/electrons/IconButton';

const SearchInput = ({chilren, onChangeText, onSubmit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onSubmitEditing={onSubmit}
          value={chilren}
          onChangeText={onChangeText}
          style={{paddingVertical: 5, paddingHorizontal: 10}}></TextInput>
      </View>
      <View>
        <IconButton
          iconname="search-outline"
          size={20}
          onPress={onSubmit}></IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,

    elevation: 3,
  },
  inputContainer: {
    flex: 1,
  },
});
export default SearchInput;
