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
      
      if (a != null && b!=null && a !='' && b!='' &&  a.length < 50) {
        PersonalMovieDB.movies[a] = b;
        console.log("Ready");
      } else {
          console.log("Wrong answer");
          i--;
      }
          
      

       

}


console.log(PersonalMovieDB);