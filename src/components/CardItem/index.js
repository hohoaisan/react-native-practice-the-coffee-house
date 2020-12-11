import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import IconButton from '../electrons/IconButton';
const CardItem = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.cardImage}></Image>
          </View>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.contentContainer}>
              <Text numberOfLines={2} style={styles.contentTitle}>
                {item.title}
              </Text>
            </View>
            <View style={[styles.contentContainer, styles.cardControls]}>
              <View>
                <Text numberOfLines={1} style={styles.contentTitle}>
                  {`${item.price}đ`}
                </Text>
              </View>
              <View>
                <IconButton
                  iconname="add-circle-outline"
                  size={20}
                  onPress={() => console.log(item.id)}></IconButton>
              </View>
            </View>
          </View>
        </>
      </View>
    </TouchableWithoutFeedback>
  );
};

CardItem.defaultProps = {
  item: {
    id: '123',
    image:
      'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
    title: 'Cà phê lúa mạch đá rất ngon',
    price: 69000,
  },
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
    flex: 1,
    aspectRatio: 2 / 2.8,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 4 / 3,
    overflow: 'hidden',
  },
  cardControls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    bottom: 0,
  },

  cardImage: {width: '100%', height: '100%'},
  contentContainer: {
    padding: 10,
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontWeight: 'bold',
  },
  contentDescription: {
    fontSize: 12,
  },
});
export default CardItem;
