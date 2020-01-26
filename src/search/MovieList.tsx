import * as React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Movie} from '../types';
import {MovieCell} from './MovieCell';

export const MovieList: React.FunctionComponent<Props> = ({movies}) => {
  return (
    <FlatList
      style={styles.container}
      data={movies}
      renderItem={renderMovieCell}
      numColumns={2}
    ></FlatList>
  );
};

const renderMovieCell = ({item}: {item: Movie}): React.ReactElement<any> => (
  <MovieCell movie={item} key={item.id}></MovieCell>
);

interface Props {
  movies: Movie[];
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
});
