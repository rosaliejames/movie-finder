export interface Movie {
  id: number;
  overview: string;
  title: string;
  backdrop_path: string | null;
  poster_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
}

export interface MovieSearchResponse {
  movies: Movie[];
  pageInfo: PageInfo;
}

export interface PageInfo {
  page: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
