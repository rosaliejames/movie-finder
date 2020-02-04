import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Movie} from '../../types';
import {NavBar} from '../../components/NavBar';
import {useCurrentMovieContext} from '../../hooks/CurrentMovieContext';

export const MovieDetailsPage: React.FunctionComponent = () => {
  const {movie, setMovie} = useCurrentMovieContext();

  const didNavigateBack = React.useMemo(() => {
    return () => setMovie(undefined);
  }, [setMovie]);
  return movie ? (
    <View style={styles.container}>
      <NavBar onBack={didNavigateBack}>{movie.title}</NavBar>
      <ScrollView style={styles.scroll}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
          style={styles.image}
        ></Image>
        <View style={styles.textContainer}>
          <Text>{movie.overview}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>User Rating: {movie.vote_average * 10}%</Text>
        </View>
      </ScrollView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 44,
  },
  scroll: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  textContainer: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
});
