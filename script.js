const NumberOfFilms = prompt("Сколько фильмов вы посмотрели за последнее время?","");

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько его оцените?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько его оцените?','');

PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;

console.log(PersonalMovieDB);