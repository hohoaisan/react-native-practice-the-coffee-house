import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
const ArticleView = ({navigation, route}) => {
  const {title, link} = route.params;
  return <WebView source={{uri: link}} />;
};

export default ArticleView;
