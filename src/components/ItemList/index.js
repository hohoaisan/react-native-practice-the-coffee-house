import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import CardItem from '../CardItem';
const space = 10;
const width = (Dimensions.get('window').width - 15 * 4 + space * 2) / 2;

const ItemList = ({lists}) => {
  return (
    <View>
      {lists.map(({title, items}, index) => (
        <View key={index}>
          <View style={styles.headingContainer}>
            <View>
              <Text style={styles.headingText}>{title}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {items.map((item, index) => (
              <View style={{width: width, marginBottom: space}} key={index}>
                <CardItem key={index} item={item} />
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
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
});
export default ItemList;
