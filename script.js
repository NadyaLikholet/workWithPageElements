'use strict';

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt("Сколько фильмов вы посмотрели за последнее время?","");  
    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt("Сколько фильмов вы посмотрели за последнее время?",""); 
    }   
}

start();

let PersonalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    MyFilms:RememberMyFilms()
};

function RememberMyFilms() {
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
}

RememberMyFilms();

function DetectPersonalLevel() {
    
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
}

DetectPersonalLevel();

function ShowMyDB(hidden) {
   if (!hidden) {
       console.log(PersonalMovieDB);
   }  
}

ShowMyDB(PersonalMovieDB.privat);

function WriteYourGenres() {
    for (let index = 1; index <= 3; index++) {
        const element = prompt('Ваш любимый жарн под номером ' + index,'');
        //const element = prompt(`Ваш любимый жарн под номером $(index)`);
       PersonalMovieDB.genres[index-1]  = element;
        
    }
        
    }

    WriteYourGenres();