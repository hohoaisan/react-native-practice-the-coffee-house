import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import Button from '../electrons/Button';
const CardSmall = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.cardImage}></Image>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <View>
                <Text numberOfLines={2} style={styles.contentTitle}>
                  {item.title}
                </Text>
              </View>
              <View>
                <Text numberOfLines={2} style={styles.contentDescription}>
                  {item.address}
                </Text>
              </View>
            </View>
          </View>
        </>
      </View>
    </TouchableWithoutFeedback>
  );
};

CardSmall.defaultProps = {
  item: {
    image:
      'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
    title: 'The Coffee House Ba Tháng 2',
    address: '82 Đường 3 Tháng 2, Thuận Phước, Hải Châu, Đà Nẵng',
    coordinates: {
      latitude: 6.0856377,
      longitude: 108.2195351,
    },
  },
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 200,
    aspectRatio: 2 / 2,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
  },
  cardImage: {width: '100%', height: '100%'},
  contentContainer: {
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  contentTitle: {
    fontWeight: 'bold',
  },
  contentDescription: {
    fontSize: 12,
  },
});
export default CardSmall;
