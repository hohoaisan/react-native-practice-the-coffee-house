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
import SearchInput from '../../../components/SearchInput';
import ListPlaceholder from '../../../components/ListPlaceholder';
import {firebase} from '../../../firebase';
const db = firebase.firestore();
const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [lists, setLists] = useState([]);

  const handleSearch = () => {
    let a = db.collection('products')
      .where('name', '>=', searchText)
      .where('name', '<=', searchText + '\uf8ff')
      .get()
      .then((querySnapshot) =>
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data());
        }),
      );
  };
  useEffect(() => {});
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchInput
            onChangeText={(text) => setSearchText(text)}
            onSubmit={handleSearch}>
            {searchText}
          </SearchInput>
        </View>
        <ScrollView>
          <ItemList lists={lists} />
        </ScrollView>
      </View>
      {lists.length ? null : <ListPlaceholder />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  searchContainer: {
    marginTop: 5,
    marginBottom: 2,
  },
});

export default SearchScreen;
