import React, {useMemo} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconButton from '../electrons/IconButton';
import Card from '../Card';
const InfoFeed = ({title, feeds, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.headingText}>{title}</Text>
        </View>
        <View>
          <IconButton iconname="ellipsis-horizontal-outline"></IconButton>
        </View>
      </View>
      <View>
        <FlatList
          renderItem={({item}, index) => (
            <Card item={item} navigation={navigation} />
          )}
          data={feeds}
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
    marginVertical: 10,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 2,
  },
  headingText: {
    fontWeight: 'bold',
  },
});

export default InfoFeed;
