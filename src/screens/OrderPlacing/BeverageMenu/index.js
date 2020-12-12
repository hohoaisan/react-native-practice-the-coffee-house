import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import ItemList from '../../../components/ItemList';
import ListPlaceholder from '../../../components/ListPlaceholder';

import {firebase} from '../../../firebase';
const db = firebase.firestore();

const BeverageMenu = ({navigation}) => {
  const [lists, setlists] = useState([]);
  useEffect(() => {
    const productTypeRef = db.collection('product_type').doc('thuc-uong');
    const productCateRef = db.collection('product_category');
    const productRef = db.collection('products');
    return productCateRef
      .where('product_type', '==', productTypeRef)
      .onSnapshot((querySnapshot) => {
        Promise.all(
          querySnapshot.docs.map(
            (category) =>
              new Promise((resolve, reject) => {
                productRef
                  .where(
                    'product_category',
                    '==',
                    productCateRef.doc(category.id),
                  )
                  .onSnapshot(
                    (querySnapshot) =>
                      resolve({
                        title: category.data().title,
                        items: querySnapshot.docs.map((doc) => ({
                          id: doc.id,
                          ...doc.data(),
                        })),
                      }),
                    (err) => console.log(err),
                  );
              }),
          ),
        ).then((data) => setlists(data));
      });
  }, []);
  return (
    <>
      <ScrollView style={styles.container}>
        <ItemList lists={lists} />
      </ScrollView>
      {lists.length ? null : <ListPlaceholder />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default BeverageMenu;
