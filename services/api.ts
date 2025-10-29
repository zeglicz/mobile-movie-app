import { MovieDetails } from '@/interfaces/interfaces';

export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export async function fetchMovies({ query }: { query: string }) {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok)
    // @ts-ignore
    throw new Error('Failed to fetch movies', response.statusText);

  const data = await response.json();

  return data.results;
}

export async function fetchMovieDetails(
  movieId: string,
): Promise<MovieDetails> {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      { method: 'GET', headers: TMDB_CONFIG.headers },
    );

    if (!response.ok) throw new Error('Failed to fetch movie details');

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
