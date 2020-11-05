//'use strict';

let PersonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    start: function () {
        PersonalMovieDB.count = +prompt("Сколько фильмов вы посмотрели за последнее время?","");  
        while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count)) {
            PersonalMovieDB.count = +prompt("Сколько фильмов вы посмотрели за последнее время?",""); 
        }   
    },    
    RememberMyFilms: function(){
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
    },
    DetectPersonalLevel: function() {
    
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
    },
    ShowMyDB: function (hidden) {
        if (!hidden) {
            console.log(PersonalMovieDB);
        }  
     },
    
    WriteYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
        const item = prompt('Ваш любимый жанр под номером ' + i,'');
        //const item = prompt(`Ваш любимый жарн под номером $(index)`);
        if (item === '' || item == null){
            console.log("Ответьте пожалуйста на вопросы");
            i--;
        } 
        else{
            PersonalMovieDB.genres[i-1]  = item;            
        }
        PersonalMovieDB.genres.forEach((item,i) => { 
            console.log(`Любимый жанр $(i + 1) - это ${item}`);
        });
        }
    },
    toggleVisibleMyDB: function(){
        if (PersonalMovieDB.privat) {
            PersonalMovieDB.privat = false;
        } else {
            PersonalMovieDB.privat = true;
        }
    }
 
     
    
};
//let y = 1; let x = y = 2; console.log(x);
//console.log(( 1 && 2 ));  (1 && 2);
console.log(+"Infinity");