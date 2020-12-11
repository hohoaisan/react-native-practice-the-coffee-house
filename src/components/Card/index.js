import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import Button from '../electrons/Button';
const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cardImage}></Image>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <View>
            <Text numberOfLines={2} style={styles.contentTitle}>
              {item.title}
            </Text>
          </View>
          <View>
            <Text numberOfLines={3} style={styles.contentDescription}>
              {item.description}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.cardControls}>
            <Button>Chi tiết</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

Card.defaultProps = {
  item: {
    image: require('../../assets/images/cardimg.png'),
    title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
    description:
      'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
  },
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
    width: 200,
    aspectRatio: 2 / 2.5,
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
  cardControls: {
    flexDirection: 'row',
  },
  contentTitle: {
    fontWeight: 'bold',
  },
  contentDescription: {
    fontSize: 12,
  },
});
export default Card;
