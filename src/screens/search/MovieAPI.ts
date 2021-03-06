import {Movie, MovieSearchResponse} from '../../types';

export const searchMovies = async (
  searchTerm: string,
  currentPage = 1,
): Promise<MovieSearchResponse> => {
  if (searchTerm === '') {
    return {
      movies: [],
      pageInfo: {hasNextPage: false, hasPreviousPage: false, page: 0},
    };
  }

  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=de5f9e7d63166b902f873eae5289633d&page=${currentPage}&query=` +
      encodeURI(searchTerm),
  );
  if (!resp.ok) {
    const {errors} = await resp.json();
    console.warn(errors);
    return {
      movies: [],
      pageInfo: {hasNextPage: false, hasPreviousPage: false, page: 0},
    };
  }
  const {results: movies, page, total_pages: totalPages} = await resp.json();
  return {
    movies: movies as Movie[],
    pageInfo: {
      page,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
};
