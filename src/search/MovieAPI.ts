import {Movie} from '../types';

export const searchMovies = async (searchTerm: string): Promise<Movie[]> => {
  if (searchTerm === '') {
    return [];
  }

  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=de5f9e7d63166b902f873eae5289633d&query=` +
      encodeURI(searchTerm),
  );
  if (!resp.ok) {
    const {errors} = await resp.json();
    console.warn(errors);
    return [];
  }
  const {results} = await resp.json();
  return results as Movie[];
};
