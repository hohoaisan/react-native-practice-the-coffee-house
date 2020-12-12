import React, {useMemo, useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIdicator from '../../../components/ProfileIndicator';
import InfoFeed from '../../../components/InfoFeed';

import {firebase} from '../../../firebase';
const db = firebase.firestore();
const MainScreen = ({navigation}) => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    let feedRef = db.collection('feeds');
    let feedcategoryRef = db.collection('feedcategory');
    let subscribe = feedcategoryRef.orderBy('order').onSnapshot(
      (querySnapshot) => {
        Promise.all(
          querySnapshot.docs.map(
            (doc) =>
              new Promise((resolve, reject) =>
                feedRef
                  .where('feedcategory', '==', feedcategoryRef.doc(doc.id))
                  .onSnapshot(
                    (querySnapshot) =>
                      resolve({
                        id: doc.id,
                        ...doc.data(),
                        feeds: querySnapshot.docs.map((doc) => ({
                          id: doc.id,
                          ...doc.data(),
                        })),
                      }),
                    (err) => console.log(err),
                  ),
              ),
          ),
        ).then((data) => {
          setFeeds(data);
        });
      },
      (err) => console.log(err),
    );
    return subscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <ProfileIdicator navigation={navigation} />
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
