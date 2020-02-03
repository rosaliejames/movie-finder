import {View, TextInput, Text, StyleSheet} from 'react-native';
import * as React from 'react';
import {searchMovies} from './MovieAPI';
import {SearchBar} from './SearchBar';
import {Movie} from '../../types';
import {MovieList} from './MovieList';
import {useDebouncedSearch} from '../../hooks/DebouncedSearch';

export const SearchPage: React.FunctionComponent = () => {
  const {
    searchTerm,
    onChangeSearchTerm,
    results,
    setResults,
  } = useDebouncedSearch(searchMovies);

  const didFetchSearchPage = React.useMemo(() => {
    return (pageNum: number) =>
      searchMovies(searchTerm, pageNum).then(setResults);
  }, [setResults, searchTerm]);

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onChangeSearchTerm={onChangeSearchTerm}
      ></SearchBar>
      {results && (
        <MovieList
          movies={results.movies}
          pageInfo={results.pageInfo}
          onFetchSearchPage={didFetchSearchPage}
        ></MovieList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
