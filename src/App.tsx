/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {SearchPage} from './screens/search';
import {Movie} from './types';
import {MovieDetailsPage} from './screens/movieDetails';
import {CurrentMovieContext} from './hooks/CurrentMovieContext';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [movie, setMovie] = React.useState<Movie | undefined>();

  return (
    <CurrentMovieContext.Provider value={{movie, setMovie}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.pageWrapper}>
        <MovieDetailsPage></MovieDetailsPage>
        <SearchPage />
      </SafeAreaView>
    </CurrentMovieContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  pageWrapper: {
    height: '100%',
    flex: 1,
  },
});
