import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export const ImageNotFound = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image_not_found.gif')}
        style={styles.icon}
      ></Image>
      <Text>Image Unavailable</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 80,
    aspectRatio: 1,
  },
});
