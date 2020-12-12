import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import CartItem from '../../../components/CartItem';

import {CartProvider, CartContext} from '../../../contexts/CartContext';
const CartScreen = () => {
  let {cart} = useContext(CartContext);
  const [cartInfo, setCartInfo] = useState({
    total: 0,
    items: [],
  });
  useEffect(() => {
    let list = [];
    let total = 0;
    for (let key in cart) {
      total += cart[key].price;
      list.push(
        <CartItem
          key={key}
          title={cart[key].title}
          price={cart[key].price}
          quantity={cart[key].count}
        />,
      );
    }
    setCartInfo({
      total,
      items: list,
    });
  }, [cart]);
  console.log("cart render");
  return (
    <>
      <ScrollView>
        <View style={[styles.headingContainer, styles.container]}>
          <View>
            <Text style={styles.headingText}>Chi tiết đơn hàng</Text>
          </View>
        </View>
        <View>
          <View>{cartInfo.items}</View>
        </View>
      </ScrollView>
      <View style={styles.vericalMargin}>
        <View>
          <View style={[styles.container, styles.totalPriceContainer]}>
            <View style={styles.totalPrice}>
              <View>
                <Text style={styles.totalTitle}>Tổng cộng</Text>
              </View>
              <View>
                <Text style={styles.totalValue}>{`${cartInfo.total} đ`}</Text>
              </View>
            </View>
          </View>
          <View style={{backgroundColor: 'tomato'}}>
            <TouchableNativeFeedback>
              <View style={{paddingVertical: 20}}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  Mua hàng
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 3,
  },
  headingText: {
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 15,
  },
  totalPriceContainer: {backgroundColor: 'white', paddingVertical: 20},
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalTitle: {fontWeight: 'bold'},
  totalValue: {fontWeight: 'bold', fontSize: 20},
  vericalMargin: {
    marginVertical: 5,
  },
});
export default CartScreen;
