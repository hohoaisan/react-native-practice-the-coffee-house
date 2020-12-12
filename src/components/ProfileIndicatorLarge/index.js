import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../electrons/Button';
import IconButton from '../electrons/IconButton';

const ProfileIndicatorLarge = ({navigation, profile}) => {
  const {user, image, loggedIn} = profile;
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImgContainer}>
            {loggedIn ? (
              <Image source={image} style={styles.profileImg}></Image>
            ) : (
              <Ionicons name="person-outline" size={30}></Ionicons>
            )}
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText}>
              {loggedIn
                ? user
                  ? user.displayName
                    ? user.displayName
                    : user.email
                  : ''
                : 'Bạn chưa đăng nhập'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  horizontalContainer: {
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {justifyContent: 'center', alignItems: 'center'},
  profileImgContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {width: '100%', height: '100%'},
  profileTextContainer: {
    marginVertical: 10,
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default ProfileIndicatorLarge;
