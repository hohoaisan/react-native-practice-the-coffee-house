import React, {useMemo, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIdicator from '../../../components/ProfileIndicator';
import InfoFeed from '../../../components/InfoFeed';
const feeds = [
  {
    title: 'Ưu đãi đặc biệt',
    feeds: [
      {
        title: 'Giảm 50%, thèm gì gọi nhé Nhà mang tới liền',
        link:
          'https://feed.thecoffeehouse.com/giam-50-them-gi-goi-nhe-nha-mang-toi-lien/',
        pubDate: 'Mon, 07 Dec 2020 16:43:39 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
        content:
          'Hoà vào không khí siêu sale cuối năm, mời team mình nghỉ tay gọi món yêu thích, Nhà giảm 50% khi nhập mã MERRY50',
        guid: '5fce59c3af1a500001270f53',
        isoDate: '2020-12-07T16:43:39.000Z',
      },
      {
        title: 'Nhà mời cà phê đậm đà, chỉ 12K',
        link: 'https://feed.thecoffeehouse.com/nha-moi-ca-phe-dam-da-chi-12k/',
        pubDate: 'Mon, 07 Dec 2020 10:49:47 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/1207-TCH-P1_800x450.jpg',
        content:
          'Tuần mới chỉ thật sự tươi tỉnh khi có một tách cà phê đậm đà kề bên. Biết vậy nên Nhà mời liền bạn có hoá đơn từ 50K mua cà phê Việt Nam giá chỉ 12K.',
        guid: '5fce07aeaf1a500001270f4f',
        isoDate: '2020-12-07T10:49:47.000Z',
      },
      {
        title: 'Nhà mời 20%, PICKUP nha',
        link: 'https://feed.thecoffeehouse.com/nha-moi-20-pickup-nha/',
        pubDate: 'Mon, 30 Nov 2020 03:34:50 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-4bc35df5935b53863f799ba2a647a93a48cb277ef917dabdd38015cf9dc00e2f_1c6da08a000c01.jpg',
        content:
          'Trải nghiệm ngay tính năng PICKUP của Nhà với ưu đãi GIẢM 20% cho đơn hàng chỉ từ 2 món, khi nhập mã PICKUPDI nào.',
        contentSnippet:
          'Trải nghiệm ngay tính năng PICKUP của Nhà với ưu đãi GIẢM 20% cho đơn hàng chỉ từ 2 món, khi nhập mã PICKUPDI nào.',
        guid: '5fc4675b400fe00001c86c05',
        isoDate: '2020-11-30T03:34:50.000Z',
      },
      {
        title: 'Bánh ngon Nhà mời, chỉ 19.000đ!',
        link:
          'https://feed.thecoffeehouse.com/banh-mi-ngon-nha-moi-chi-19-000d/',
        pubDate: 'Sun, 29 Nov 2020 16:40:46 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/11/0-02-06-8f9e0bbe7dca0d7170b26efd48a102946a27f7e28e2fba100c1adb2406a97e7c_1c6d9fab5cc03f.jpg',
        content:
          'Cuối năm bận rộn thi cử, chạy số, chiến "deadline" nhưng không được bỏ bữa nha ấy nhé! Nhà luôn sẵn sàng giao tận nơi bánh mì nóng giòn cùng cà phê đậm đà, trà mát lạnh cho bạn nạp năng lượng.',
        contentSnippet:
          'Cuối năm bận rộn thi cử, chạy số, chiến "deadline" nhưng không được bỏ bữa nha ấy nhé! Nhà luôn sẵn sàng giao tận nơi bánh mì nóng giòn cùng cà phê đậm đà, trà mát lạnh cho bạn nạp năng lượng.',
        guid: '5fc3becc400fe00001c86c02',
        isoDate: '2020-11-29T16:40:46.000Z',
      },
      {
        title: 'Mua 3 Tặng 1 - Mời nhóm mình chung vui',
        link:
          'https://feed.thecoffeehouse.com/mua-3-tang-1-moi-nhom-minh-chung-vui-2/',
        pubDate: 'Mon, 23 Nov 2020 08:19:27 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-0216ae8b44b6abd633099e15d794aa4dee6972db33d212e115a9ba6dca0916ec_1c6da08a00d92b.jpg',
        content:
          'Chỉ cần nhập mã CUNGVUI qua app, Nhà mời ngay ưu đãi Mua 3 Tặng 1 - để team mình linh đình lên tinh thần và rôm rả mỗi ngày.',
        contentSnippet:
          'Chỉ cần nhập mã CUNGVUI qua app, Nhà mời ngay ưu đãi Mua 3 Tặng 1 - để team mình linh đình lên tinh thần và rôm rả mỗi ngày.',
        guid: '5fbb7008400fe00001c86bed',
        isoDate: '2020-11-23T08:19:27.000Z',
      },
    ],
  },
  {
    title: 'Cập nhật từ nhà',
    feeds: [
      {
        title: 'Nhà Riverside Vũ Tông Phan - Hà Nội vui khai trương linh đình',
        link:
          'https://feed.thecoffeehouse.com/nha-reverside-vu-tong-phan-ha-noi/',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/12/Reverside-7-banner.jpg',
        pubDate: 'Mon, 07 Dec 2020 17:11:00 GMT',
        content:
          'Người ta dậy thì thành công, còn chúng mình dậy thì nhớ mang chiếc áo đủ ấm, ghé ngay Nhà Reverside Vũ Tông Phan - Hà Nội mới toanh vui khai trương linh đình (07/12 - 09/12)',
        guid: '5fce60ddaf1a500001270f56',
        isoDate: '2020-12-07T17:11:00.000Z',
      },
      {
        title: 'Taste of Xmas - Chạm vị Giáng sinh',
        link:
          'https://feed.thecoffeehouse.com/taste-of-xmas-cham-vi-giang-sinh/',
        pubDate: 'Mon, 23 Nov 2020 08:35:01 GMT',
        image:
          'https://feed.thecoffeehouse.com/content/images/2020/11/1120-TCH-P1_800x450.jpg',
        content:
          'Năm nay tại Nhà, “vị" Giáng sinh mà bạn yêu thích, mong chờ từ trước đến nay vẫn sẽ vẹn nguyên và đong đầy - tất cả đều sống động qua từng khoảnh khắc, từng ngóc ngách quanh chiếc bàn cà phê ấm cúng…',
        contentSnippet:
          'Năm nay tại Nhà, “vị" Giáng sinh mà bạn yêu thích, mong chờ từ trước đến nay vẫn sẽ vẹn nguyên và đong đầy - tất cả đều sống động qua từng khoảnh khắc, từng ngóc ngách quanh chiếc bàn cà phê ấm cúng…',
        guid: '5fbb7258400fe00001c86bf0',
        isoDate: '2020-11-23T08:35:01.000Z',
      },
    ],
  },
  {
    title: '#Coffee Lover',
    feeds: [],
  },
];

const MainScreen = ({navigation}) => {
  useEffect(() => {
    
  });
  return (
    <View style={styles.container}>
      <View>
        <ProfileIdicator />
      </View>
      <ScrollView>
        <View style={styles.feedContainer}>
          {feeds.map(({title, feeds}, index) => (
            <InfoFeed
              key={index}
              title={title}
              feeds={feeds}
              navigation={navigation}
            />
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
