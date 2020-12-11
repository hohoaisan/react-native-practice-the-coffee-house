import React, {useMemo} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIdicator from '../../../components/ProfileIndicator';
import InfoFeed from '../../../components/InfoFeed';
const feeds = [
  {
    title: 'Ưu đãi đặc biệt',
    feeds: [
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
    ],
  },
  {
    title: 'Cập nhật từ nhà',
    feeds: [
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
    ],
  },
  {
    title: '#Coffee Lover',
    feeds: [
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
      {
        image: require('../../../assets/images/cardimg.png'),
        title: 'Giảm 50% thèm gì gọi nhé, nhà mang tới liền',
        description:
          'Hoà vào không gian của biết bao nhiêu điều mới lạ thì bạn sẽ cảm thấy bất lực trong khi bản thân mình không thể đáp ứng được những niềm tin và khát vọng cháy bỏng ấy',
      },
    ],
  },
];
const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <ProfileIdicator />
      </View>
      <ScrollView>
        <View style={styles.feedContainer}>
          {feeds.map(({title, feeds}, index) => (
            <InfoFeed key={index} title={title} feeds={feeds} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dedee2',
    flex: 1,
  },
  feedContainer: {
    paddingHorizontal: 15,
  },
});
export default MainScreen;
