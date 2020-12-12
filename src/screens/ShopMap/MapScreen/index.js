import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import IconButton from '../../../components/electrons/IconButton';
import CardSmall from '../../../components/CardSmall';
import {firebase} from '../../../firebase';

const db = firebase.firestore();

const MapScreen = ({navigation}) => {
  const map = useRef(null);
  const [region, setRegion] = useState({
    latitude: 16.0697261,
    longitude: 108.2173665,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    return db.collection('shops').onSnapshot((querySnapShot) => {
      const marker = querySnapShot.docs.map((doc) => ({
        ...doc.data(),
        coordinate: {
          latitude: doc.data().coordinate.latitude,
          longitude: doc.data().coordinate.longitude,
        },
      }));
      setMarkers(marker);
    });
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}>
        {markers.length
          ? markers.map(({title, address, coordinate}, index) => {
              return (
                <Marker
                  key={index}
                  onPress={(event) => console.log(event)}
                  coordinate={{
                    longitude: coordinate.longitude ? coordinate.longitude : 0,
                    latitude: coordinate.latitude ? coordinate.latitude : 0,
                  }}
                  title={title}
                  description={address}>
                  <IconButton
                    iconname="cafe-outline"
                    size={20}
                    style={{backgroundColor: 'white'}}></IconButton>
                </Marker>
              );
            })
          : null}
      </MapView>
      <View style={styles.listContainer}>
        {markers.length ? (
          <FlatList
            renderItem={({item}, index) => (
              <CardSmall
                item={item}
                key={index}
                onPress={() =>
                  map.current.animateToRegion({...region, ...item.coordinate})
                }></CardSmall>
            )}
            data={markers}
            horizontal={true}
            keyExtractor={(item, index) => `item-id-${index}`}
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
          />
        ) : null}
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
