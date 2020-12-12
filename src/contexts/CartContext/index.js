import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const CartContext = React.createContext();
CartContext.displayName = 'CartContext';

const CartProvider = ({navigation, children, ...rest}) => {
  const [cart, setCart] = useState({});
  const addItemToCart = ({id, price, title}) => {
    let newcart = JSON.parse(JSON.stringify(cart));
    if (newcart[id]) {
      newcart[id].count++;
    } else {
      newcart[id] = {price, title, count: 1};
    }
    console.log(newcart);
    setCart(newcart);
  };

  return (
    <CartContext.Provider value={{cart, addItemToCart}}>
      {children}
    </CartContext.Provider>
  );
};
export {CartProvider, CartContext};
