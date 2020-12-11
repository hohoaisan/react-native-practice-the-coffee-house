import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import IconButton from '../../../components/electrons/IconButton';
import CardSmall from '../../../components/CardSmall';
const markers = [
  {
    title: 'The Coffee House Ba Tháng 2',
    address: '82 Đường 3 Tháng 2, Thuận Phước, Hải Châu, Đà Nẵng',
    image:
      'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
    coordinates: {
      latitude: 16.0856377,
      longitude: 108.2195351,
    },
  },
  {
    title: 'The Coffee House Nguyễn Chí Thanh',
    coordinates: {
      latitude: 16.0727822,
      longitude: 108.2208842,
    },
    image:
      'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
    address:
      '80A Nguyễn Chí Thanh, Hải Châu 1, Hải Châu, Đà Nẵng 550000, Vietnam',
  },
  {
    title: 'The Coffee House',
    coordinates: {
      latitude: 16.0697261,
      longitude: 108.2173665,
    },
    image:
      'https://feed.thecoffeehouse.com/content/images/2020/12/0-02-06-d0dfdca6f4839c9a59b9f2e6fa0a89a03acb63238a5a5566ceeb696de4c29271_1c6da08aed8a3f.jpg',
    address: '80 Pasteur, Hải Châu 1, Hải Châu, Đà Nẵng',
  },
];
const MapScreen = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 16.0697261,
    longitude: 108.2173665,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  let ref = null;

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => (ref = map)}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.address}>
            <IconButton
              iconname="cafe-outline"
              size={20}
              style={{backgroundColor: 'white'}}></IconButton>
          </Marker>
        ))}
      </MapView>
      <View style={styles.listContainer}>
        <FlatList
          renderItem={({item}, index) => (
            <CardSmall
              item={item}
              key={index}
              onPress={() =>
                ref.animateToRegion({...region, ...item.coordinates})
              }></CardSmall>
          )}
          data={markers}
          horizontal={true}
          keyExtractor={(item, index) => `item-id-${index}`}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  map: {
    flex: 1,
  },
  listContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
  },
});
export default MapScreen;
