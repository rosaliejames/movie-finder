import * as React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Movie} from '../../types';
import {MovieCell} from './MovieCell';
import {Button} from '../../components/Button';

export const MovieList: React.FunctionComponent<Props> = ({
  movies,
  hasNextPage,
  hasPreviousPage,
  loadNextPage,
  loadPreviousPage,
}) => {
  return (
    <FlatList
      style={styles.container}
      data={movies}
      renderItem={renderMovieCell}
      numColumns={2}
      ListFooterComponent={
        movies.length ? (
          <View style={styles.buttonContainer}>
            <Button onPress={loadPreviousPage} disabled={!hasPreviousPage}>
              View Previous
            </Button>
            <Button onPress={loadNextPage} disabled={!hasNextPage}>
              View Next
            </Button>
          </View>
        ) : (
          undefined
        )
      }
    ></FlatList>
  );
};

const renderMovieCell = ({item}: {item: Movie}): React.ReactElement<any> => (
  <MovieCell movie={item} key={item.id}></MovieCell>
);

interface Props {
  movies: Movie[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  loadNextPage: () => void;
  loadPreviousPage: () => void;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
});
