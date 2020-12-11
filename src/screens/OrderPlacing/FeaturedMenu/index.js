import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import ItemList from '../../../components/ItemList';

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
const FeaturedMenu = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <ItemList lists={lists}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  }
});
export default FeaturedMenu;
