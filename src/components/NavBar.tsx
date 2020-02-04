import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export const NavBar: React.FunctionComponent<Props> = ({children, onBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.side} disabled={!onBack} onPress={onBack}>
        {onBack && (
          <Image
            source={require('../assets/back_icon.png')}
            style={styles.backIcon}
          ></Image>
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.side}></View>
    </View>
  );
};

interface Props {
  onBack?: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  backIcon: {
    height: 30,
    aspectRatio: 1,
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  side: {
    justifyContent: 'center',
    flex: 1,
  },
});
