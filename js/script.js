
const numberOfFilms = +prompt('Сколько фильмо вы посмотрели?', '');

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a =  prompt('Один из последних просмотренных фильмов?',''),
      b =  prompt('На сколько оцените его?',''),
      c =  prompt('Один из последних просмотренных фильмов?',''),
      d =  prompt('На сколько оцените его?','');

      personalMovieBD.movies[a] = b;
      personalMovieBD.movies[c] = d;

console.log(personalMovieBD);

