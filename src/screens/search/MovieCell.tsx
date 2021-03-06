import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Movie} from '../../types';
import {ImageNotFound} from '../../components/ImageNotFound';
import {useCurrentMovieContext} from '../../hooks/CurrentMovieContext';

export const MovieCell: React.FunctionComponent<Props> = ({movie}) => {
  const {title, poster_path} = movie;
  const {setMovie} = useCurrentMovieContext();

  const didPressMovie = React.useMemo(() => {
    return () => {
      setMovie(movie);
    };
  }, [movie]);
  return (
    <TouchableOpacity style={styles.container} onPress={didPressMovie}>
      {poster_path ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w185/${poster_path}`,
          }}
          style={styles.image}
          resizeMode="contain"
        ></Image>
      ) : (
        <View style={styles.image}>
          <ImageNotFound></ImageNotFound>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text lineBreakMode="tail">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface Props {
  movie: Movie;
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
  imageWrapper: {
    width: '100%',
    flex: 1,
  },
  image: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    aspectRatio: 2 / 3,
  },
});
