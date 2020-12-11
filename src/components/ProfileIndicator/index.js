import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../electrons/Button';
import IconButton from '../electrons/IconButton';
const profile = {
  name: 'Hoài Sản',
  image: require('../../assets/images/profile.png'),
  loggedIn: true,
};

const ProfileIndicator = ({navigation}) => {
  const {name, image, loggedIn} = profile;
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <TouchableOpacity
          disabled={!loggedIn}
          onPress={
            loggedIn ? () => console.log('navigate to profile') : undefined
          }>
          <View style={styles.profileContainer}>
            <View style={styles.profileImgContainer}>
              {loggedIn ? (
                <Image source={image} style={styles.profileImg}></Image>
              ) : (
                <Ionicons name="person-outline" size={20}></Ionicons>
              )}
            </View>
            <View style={styles.profileTextContainer}>
              {loggedIn ? (
                <Text style={styles.profileText}>{name}</Text>
              ) : (
                <Button onPress={() => console.log('Clicked')}>
                  Đăng nhập
                </Button>
              )}
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <IconButton
            iconname="notifications-outline"
            onPress={
              loggedIn ? () => console.log('navigate to noti') : undefined
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    height: 50,
    backgroundColor: 'white'
  },
  horizontalContainer: {
    flex: 1,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {flexDirection: 'row', alignItems: 'center'},
  profileImgContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {width: '100%', height: '100%'},
  profileTextContainer: {
    marginLeft: 10,
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default ProfileIndicator;
