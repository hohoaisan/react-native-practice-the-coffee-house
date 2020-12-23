import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import IconButton from '../../../components/electrons/IconButton';
import CardSmall from '../../../components/CardSmall';
import {firebase} from '../../../firebase';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Snackbar from 'react-native-snackbar';
let listRef = React.createRef();

const db = firebase.firestore();

// Geolocation.setRNConfiguration(config);

const MapScreen = ({navigation}) => {
  const map = useRef(null);
  const [region, setRegion] = useState({
    latitude: 16.0697261,
    longitude: 108.2173665,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const [markers, setMarkers] = useState([]);
  const [regions, setRegions] = useState([]);
  const [defaultDropdownValue, setDefaultDropdownValue] = useState(null);

  const animateToRegion = ({
    latitudeDelta,
    longitudeDelta,
    latitude,
    longitude,
  }) => {
    map.current.animateToRegion({
      latitudeDelta,
      longitudeDelta,
      latitude,
      longitude,
    });
  };
  const handleRegionSelectionChange = ({value, payloads}) => {
    setRegion({
      ...region,
      ...payloads.coordinate,
    });
    getLocationsOfSeletedRegion(value, (markers) => setMarkers(markers));
  };
  const scrollListToIndex = (index) => {
    listRef.current.scrollToIndex({index});
  };
  const snackBarShowMessage = (message, options) => {
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'Bỏ qua',
        textColor: 'green',
        onPress: () => {
          Snackbar.dismiss();
        },
      },
      ...options,
    });
  };
  const moveToUserLocation = async ({animated, moveRegion}) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'The Coffee House',
          message: 'The Coffee House want to access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          ({coords}) => {
            const {latitude, longitude} = coords;
            if (moveRegion) {
              getNearestRegion({latitude, longitude}, (nearestRegion) => {
                setDefaultDropdownValue(nearestRegion.value);
              });
            }
            if (animated) {
              animateToRegion({...region, latitude, longitude});
            } else {
              setRegion({
                ...region,
                latitude,
                longitude,
              });
            }
          },
          (err) => {
            snackBarShowMessage('Bạn chưa bật định vị');
          },
          {
            enableHighAccuracy: true,
          },
        );
      } else {
      }
    } catch (err) {
      snackBarShowMessage('Vui lòng cấp quyền cho ứng dụng truy cập vị trí');
    }
  };
  const getLocationsOfSeletedRegion = (
    regionid,
    callbackSuccess,
    callbackFailue,
  ) => {
    const regionRef = db.collection('regions').doc(regionid);
    db.collection('shops')
      .where('region', '==', regionRef)
      .get()
      .then((querySnapShot) => {
        const markers = querySnapShot.docs.map((doc) => ({
          ...doc.data(),
          coordinate: {
            latitude: doc.data().coordinate.latitude,
            longitude: doc.data().coordinate.longitude,
          },
        }));
        if (typeof callbackSuccess === 'function') {
          callbackSuccess(markers);
        }
      })
      .catch((err) => {
        if (typeof callbackFailue === 'function') {
          callbackFailue(err);
        } else {
          console.log(err);
        }
      });
  };
  const getRegions = (callbackSuccess, callbackFailue) => {
    db.collection('regions')
      .orderBy('order')
      .get()
      .then((querySnapshot) => {
        const regions = querySnapshot.docs.map((region) => ({
          label: region.data().title,
          value: region.id,
          payloads: {
            ...region.data(),
            id: region.id,
            coordinate: {
              latitude: region.data().coordinate.latitude,
              longitude: region.data().coordinate.longitude,
            },
          },
        }));
        if (typeof callbackSuccess === 'function') {
          callbackSuccess(regions);
        }
      })
      .catch((err) => {
        if (typeof callbackFailue === 'function') {
          callbackFailue(err);
        } else {
          console.warn(err);
        }
      });
  };
  const getNearestRegion = ({latitude, longitude}, callback) => {
    const calcDistance = (region, {latitude, longitude}) => {
      return Math.sqrt(
        Math.pow(latitude - region.latitude, 2) +
          Math.pow(longitude - region.longitude, 2),
      );
    };
    if (regions.length) {
      const nearestRegion = regions.reduce((nextRegion, currentRegion) => {
        return calcDistance(currentRegion.payloads.coordinate, {
          latitude,
          longitude,
        }) >=
          calcDistance(nextRegion.payloads.coordinate, {latitude, longitude})
          ? nextRegion
          : currentRegion;
      });
      if (typeof callback === 'function') {
        callback(nearestRegion);
      }
    }
  };
  useEffect(() => {
    getRegions((regions) => {
      setRegions(regions);
    });
  }, []);

  useEffect(() => {
    moveToUserLocation({animated: false, moveRegion: true});
  }, [regions]);

  return (
    <View style={styles.container}>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}>
        {markers.length
          ? markers.map(({title, address, coordinate}, index) => {
              return (
                <Marker
                  key={index}
                  onPress={(event) => scrollListToIndex(index)}
                  coordinate={{
                    longitude: coordinate.longitude ? coordinate.longitude : 0,
                    latitude: coordinate.latitude ? coordinate.latitude : 0,
                  }}>
                  <IconButton
                    iconname="cafe-outline"
                    size={20}
                    style={{backgroundColor: 'white'}}></IconButton>
                </Marker>
              );
            })
          : null}
      </MapView>
      <View style={styles.regionSelection}>
        <View>
          <DropDownPicker
            items={regions}
            defaultValue={defaultDropdownValue}
            placeholder="Chọn khu vực"
            containerStyle={{height: 40}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            onChangeItem={handleRegionSelectionChange}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={{marginBottom: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <IconButton
              iconname="location-outline"
              size={25}
              padding={20}
              style={styles.locationPointer}
              onPress={() => moveToUserLocation({animated: true})}></IconButton>
          </View>
        </View>
        <View>
          {markers.length ? (
            <FlatList
              ref={listRef}
              renderItem={({item}, index) => (
                <CardSmall
                  item={item}
                  key={index}
                  onPress={() =>
                    animateToRegion({...region, ...item.coordinate})
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
  regionSelection: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: 10,
  },
  locationPointer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default MapScreen;
