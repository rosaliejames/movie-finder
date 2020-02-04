import * as React from 'react';
import {Movie} from '../types';

export const CurrentMovieContext = React.createContext<
  CurrentMovieContext | undefined
>(undefined);

interface CurrentMovieContext {
  movie: Movie | undefined;
  setMovie: (movie?: Movie) => void;
}

export const useCurrentMovieContext = (): CurrentMovieContext => {
  const context = React.useContext(CurrentMovieContext);

  if (!context) {
    throw new Error('Must be child of CurrentMovieContext.Provider');
  }
  return context;
};
