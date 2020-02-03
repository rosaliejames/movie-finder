import * as React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Movie, MovieSearchResponse} from '../../types';
import {MovieCell} from './MovieCell';
import {Button} from '../../components/Button';

export const MovieList: React.FunctionComponent<Props> = ({
  movies,
  pageInfo: {hasNextPage, hasPreviousPage, page},
  onFetchSearchPage,
}) => {
  const flatListRef = React.useRef<FlatList<Movie>>(null);

  const loadPreviousPage = React.useMemo(() => {
    return () => {
      onFetchSearchPage(page - 1);
    };
  }, [onFetchSearchPage, page]);

  const loadNextPage = React.useMemo(() => {
    return () => {
      onFetchSearchPage(page + 1);
    };
  }, [onFetchSearchPage, page, flatListRef]);

  React.useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0, animated: false});
    }
  }, [movies, flatListRef]);

  return (
    <FlatList
      ref={flatListRef}
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
  pageInfo: MovieSearchResponse['pageInfo'];
  onFetchSearchPage: (pageNum: number) => void;
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
