import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import IconButton from '../electrons/IconButton';
const CartItem = ({
  title,
  price,
  quantity,
  onPress,
  onIncrease,
  onDecrease,
  onChangeText,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.wrapper}>
          <View style={styles.cartItem}>
            <View>
              <Text style={styles.headingText}>{title}</Text>
            </View>
            <View style={styles.cartItemControls}>
              <View>
                <IconButton
                  onPress={onDecrease}
                  iconname="remove-outline"></IconButton>
              </View>
              <View>
                <TextInput
                  textAlignVertical="center"
                  value={`${quantity}`}
                  onChangeText={onChangeText}
                  style={styles.inputStyle}></TextInput>
              </View>
              <View>
                <IconButton
                  onPress={onIncrease}
                  iconname="add-outline"></IconButton>
              </View>
            </View>
          </View>
          <View>
            <View>
              <Text>{`${price}đ`}</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <IconButton
                onPress={onDelete}
                iconname="trash-outline"
                color="tomato"></IconButton>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
CartItem.defaultProps = {
  title: 'Cà phê lúa mạch đá',
  quantity: 2,
  price: 69000,
};
const styles = StyleSheet.create({
  container: {
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    backgroundColor: 'white',
  },

  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartItem: {flex: 1, justifyContent: 'center'},
  headingText: {fontWeight: 'bold'},
  cartItemControls: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  inputStyle: {padding: 0, fontSize: 15, textAlign: 'center'},
});

export default CartItem;
