import React, {useState, useMemo} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileIndicatorLarge from '../../../components/ProfileIndicatorLarge';
import Button from '../../../components/electrons/Button';
import TextInput from '../../../components/electrons/TextInput';

const profile = {
  name: 'Hoài Sản',
  dob: '25/11/1999',
  image: require('../../../assets/images/profile.png'),
  phone: '0935245367',
  loggedIn: true,
};
const ProfileInfo = () => {
  const {name, image, dob, phone, loggedIn} = profile;
  const [regiserStatus, setRegiserStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({name, dob, phone});
  const [regInfo, setRegInfo] = useState({});
  const [logInfo, setLogInfo] = useState({});
  const changeObjectState = (state, setState, feild, text) => {
    let newState = {
      ...state,
    };
    newState[feild] = text;
    setState(newState);
  };

  const feilds = useMemo(() => ({
    info: [
      {
        name: 'Tên',
        feild: 'name',
      },
      {
        name: 'Sinh nhật',
        feild: 'dob',
      },
      {
        name: 'Số điện thoại',
        feild: 'phone',
      },
    ],
    register: [
      {
        name: 'Tên',
        feild: 'name',
      },
      {
        name: 'Sinh nhật',
        feild: 'dob',
      },
      {
        name: 'Số điện thoại',
        feild: 'phone',
      },
      {
        name: 'Email',
        feild: 'email',
      },
      {
        name: 'Password',
        feild: 'password',
      },
    ],
    login: [
      {
        name: 'Email',
        feild: 'email',
      },
      {
        name: 'Password',
        feild: 'password',
      },
    ],
  }));
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <ProfileIndicatorLarge profile={profile} />
      </View>
      <View>
        <View>
          <View>
            <View style={[styles.container, styles.headingContainer]}>
              <Text style={styles.infoHeading}>
                {loggedIn
                  ? 'Thông tin cá nhân'
                  : regiserStatus
                  ? 'Đăng kí'
                  : 'Đăng nhập'}
              </Text>
            </View>
          </View>
          <View>
            {loggedIn ? (
              <>
                {feilds.info.map((item, index) => (
                  <TextInput
                    key={index}
                    title={item.name}
                    disabled={!editStatus}
                    onChangeText={(text) =>
                      changeObjectState(userInfo, setUserInfo, item.feild, text)
                    }>
                    {userInfo[item.feild]}
                  </TextInput>
                ))}
              </>
            ) : regiserStatus ? (
              <>
                {feilds.register.map((item, index) => (
                  <TextInput
                    key={index}
                    title={item.name}
                    onChangeText={(text) =>
                      changeObjectState(regInfo, setRegInfo, item.feild, text)
                    }>
                    {regInfo[item.feild]}
                  </TextInput>
                ))}
              </>
            ) : (
              <>
                {feilds.login.map((item, index) => (
                  <TextInput
                    key={index}
                    title={item.name}
                    onChangeText={(text) =>
                      changeObjectState(logInfo, setLogInfo, item.feild, text)
                    }>
                    {logInfo[item.feild]}
                  </TextInput>
                ))}
              </>
            )}
          </View>
          <View style={[styles.container, styles.profileControls]}>
            {loggedIn ? (
              editStatus ? (
                <>
                  <Button
                    onPress={() => {
                      console.log(userInfo);
                      setEditStatus(false);
                    }}>
                    Lưu thông tin
                  </Button>
                  <Button
                    onPress={() => {
                      setUserInfo({name, dob, phone});
                      setEditStatus(false);
                    }}>
                    Huỷ thay đổi
                  </Button>
                </>
              ) : (
                <>
                  <Button onPress={() => setEditStatus(true)}>
                    Sửa thông tin
                  </Button>
                  <Button>Đăng xuất</Button>
                </>
              )
            ) : regiserStatus ? (
              <>
                <Button onPress={() => console.log(regInfo)}>
                  Đăng kí tài khoản
                </Button>
                <Button onPress={() => setRegiserStatus(false)}>
                  Đăng nhập
                </Button>
              </>
            ) : (
              <>
                <Button onPress={() => console.log(logInfo)}>Đăng nhập</Button>
                <Button onPress={() => setRegiserStatus(true)}>Đăng kí</Button>
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  infoHeading: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer: {
    marginVertical: 10,
  },
  profileControls: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
});
export default ProfileInfo;
