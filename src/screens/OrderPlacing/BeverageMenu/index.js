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
import ListPlaceholder from '../../../components/ListPlaceholder';
const lists = [
  {
    title: 'Cà phê',
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
    ],
  },
  {
    title: 'Thức uống đá xay',
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
    ],
  },
  {
    title: 'Trà trái cây',
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
    ],
  },
];
const BeverageMenu = ({navigation}) => {
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
