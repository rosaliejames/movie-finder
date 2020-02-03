import {View, TextInput, Text, StyleSheet} from 'react-native';
import * as React from 'react';
import {searchMovies} from './MovieAPI';
import {SearchBar} from './SearchBar';
import {Movie} from '../../types';
import {MovieList} from './MovieList';

export const SearchPage: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [pageInfo, setPageInfo] = React.useState({
    hasNextPage: false,
    hasPreviousPage: false,
    page: 0,
  });
  const didChangeSearchTerm = React.useMemo(() => {
    return (input: string) => {
      setSearchTerm(input);
    };
  }, [setSearchTerm]);

  React.useMemo(() => {
    searchMovies(searchTerm).then(resp => {
      setMovies(resp.movies);
      if (resp.pageInfo) {
        setPageInfo(resp.pageInfo);
      }
    });
  }, [searchTerm]);

  const loadPrevPage = React.useMemo(() => {
    return () => {
      setMovies([]);
      searchMovies(searchTerm, pageInfo.page - 1).then(resp => {
        setMovies(resp.movies);
        if (resp.pageInfo) {
          setPageInfo(resp.pageInfo);
        }
      });
    };
  }, [searchTerm, pageInfo.page]);

  const loadNextPage = React.useMemo(() => {
    return () => {
      setMovies([]);
      searchMovies(searchTerm, pageInfo.page + 1).then(resp => {
        setMovies(resp.movies);
        if (resp.pageInfo) {
          setPageInfo(resp.pageInfo);
        }
      });
    };
  }, [searchTerm, pageInfo.page]);

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={didChangeSearchTerm}
      ></SearchBar>
      <MovieList
        movies={movies}
        hasNextPage={pageInfo.hasNextPage}
        hasPreviousPage={pageInfo.hasPreviousPage}
        loadPreviousPage={loadPrevPage}
        loadNextPage={loadNextPage}
      ></MovieList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
