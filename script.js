const NumberOfFilms = +prompt("Сколько фильмов вы посмотрели за последнее время?","");

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

// for (let i = 0; i < 2; i++) 
// { let a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько его оцените?','');  
      
//       if (a != null && b!=null && a !='' && b!='' &&  a.length < 50) {
//         PersonalMovieDB.movies[a] = b;
//         console.log("Good work");
//       } else {
//           console.log("Wrong answer");
//           i--;
//       }
// }

let i =0;
while (i < 2) 
{ let a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько его оцените?','');  
      
      if (a != null && b!=null && a !='' && b!='' &&  a.length < 50) {
        PersonalMovieDB.movies[a] = b;
        console.log("Good work");
      } else {
          console.log("Wrong answer");
          i--;
      }
      i++;
}


if (PersonalMovieDB.count < 10) {
    console.log("Вы посмотрели достатчно мало фильмов");
} else { if (PersonalMovieDB.count>=10 && PersonalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else { if (PersonalMovieDB.count > 30) {
    console.log("Вы киноман");
}
  else {console.log("Произошла ошибка");} 
}
    
}


console.log(PersonalMovieDB);