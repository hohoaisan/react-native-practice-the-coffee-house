import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {firebase} from '../../firebase';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({navigation, children, ...rest}) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    user: null,
  });
  const signIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('signed in');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log('signed out');
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const changeInfo = (displayName, photoURL) => {
    firebase.auth().currentUser.updateProfile({
      displayName,
      photoURL,
    });
  };
  function onAuthStateChanged(user) {
    setAuth((prevState) => ({user: user, loggedIn: !!user}));
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <AuthContext.Provider value={{...auth, signIn, signOut, changeInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthProvider, AuthContext};
