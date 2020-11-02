const NumberOfFilms = prompt("Сколько фильмов вы посмотрели за последнее время?","");

const PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько его оцените?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько его оцените?','');

// PersonalMovieDB.movies[a] = b;
// PersonalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) 
{ let a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько его оцените?','');  
      
      if (a.length == 0 ) {
          return;
      } else {if (a.length > 50) {
          alert("Длина больше 50 симвовов. Будьте краткими пожалуйста")
      } else {
          
      }
          
      }

      PersonalMovieDB.movies[a] = b; 

}


console.log(PersonalMovieDB);