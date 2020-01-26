import {View, TextInput, Text, StyleSheet} from 'react-native';
import * as React from 'react';
import {searchMovies} from './MovieAPI';
import {SearchBar} from './SearchBar';
import {Movie} from '../types';
import {MovieList} from './MovieList';

export const SearchPage: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const didChangeSearchTerm = React.useMemo(() => {
    return (input: string) => {
      setSearchTerm(input);
    };
  }, [setSearchTerm]);

  React.useMemo(() => {
    searchMovies(searchTerm).then(setMovies);
  }, [searchTerm]);
  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={didChangeSearchTerm}
      ></SearchBar>
      <MovieList movies={movies}></MovieList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
