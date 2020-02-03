import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export const SearchBar: React.FunctionComponent<Props> = ({
  searchTerm,
  onChangeSearchTerm,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          value={searchTerm}
          onChangeText={onChangeSearchTerm}
          style={styles.searchBar}
          placeholder="Search movies"
          clearButtonMode="always"
        ></TextInput>
      </View>
    </View>
  );
};

interface Props {
  searchTerm: string;
  onChangeSearchTerm: (searchTerm: string) => void;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  wrapper: {
    minHeight: 42,
    justifyContent: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  searchBar: {
    marginHorizontal: 8,
    // fontSize: 18,
  },
});
