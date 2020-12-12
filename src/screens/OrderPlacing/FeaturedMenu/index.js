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
const FeaturedMenu = ({navigation}) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    return db
      .collection('products')
      .orderBy('count', 'desc')
      .limit(10)
      .onSnapshot((querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLists([
          {
            title: 'Món được yêu thích',
            items: data,
          },
        ]);
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
export default FeaturedMenu;
