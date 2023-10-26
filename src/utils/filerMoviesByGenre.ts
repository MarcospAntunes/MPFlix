export const genreIdsToNames: { [key: number]: string } = {
  28: 'action',
  12: 'adventure',
  16: 'animation',
  35: 'comedy',
  80: 'crime',
  99: 'documentary',
  18: 'drama',
  27: 'horror',
  878: 'scienceFiction',
};

function filterMoviesByGenre(genreId: number, movies: any) {
    return movies.filter((movie: any) => movie.genre_ids.includes(genreId));
  }

export default filterMoviesByGenre
  