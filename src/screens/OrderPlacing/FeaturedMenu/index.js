import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import CardItem from '../../../components/CardItem';

const lists = [
  {
    title: 'Món được yêu thích',
    items: [
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
      {
        id: '123',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        title: 'Cà phê lúa mạch đá rất ngon',
        price: 69000,
      },
    ],
  },
];
const space = 10;
const width = (Dimensions.get('window').width - 15 * 4 + space * 2) / 2;
const FeaturedMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      {lists.map(({title, items}, index) => (
        <View key={index} style={{flex: 1}}>
          <View style={styles.headingContainer}>
            <View>
              <Text style={styles.headingText}>{title}</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              renderItem={({item}, index) => (
                <View style={{width: width}}>
                  <CardItem item={item} />
                </View>
              )}
              contentContainerStyle={{paddingBottom: 10}}
              data={items}
              numColumns={2}
              keyExtractor={(item, index) => `item-id-${index}`}
              ItemSeparatorComponent={() => (
                <View style={{width: space, height: space}} />
              )}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginVertical: 10,
  },
  headingText: {
    fontWeight: 'bold',
  },
});
export default FeaturedMenu;
