/*jshint esversion: 6 */ 

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
 
const advBlock = document.querySelectorAll('.promo__adv'),
      genre = document.getElementsByClassName('promo__genre'),
      poster = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
};

const makeChanges = () => {
    //genre.textContent = 'драма';
    genre[0].textContent = 'ДРАМА';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = function(arr) {
    arr.sort();
};

function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });
}

addForm.addEventListener('submit', function(event)  {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();


});

deleteAdv(advBlock);
makeChanges();
createMovieList(movieDB.movies,movieList);