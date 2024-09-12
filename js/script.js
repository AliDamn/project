"use strict"
const NumberOfFilms = +prompt("How many films did you see?","");
const PersonalMovieDB = {
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
const a = prompt('What is the last movie did you see?',''),
      b = prompt('How many stars you would put for this film?',''),
      c = prompt('What is the last movie did you see?',''),
      d = prompt('How many stars you would put for this film?','');

PersonalMovieDB.movies[a]=b;
PersonalMovieDB.movies[c]=d;
console.log(PersonalMovieDB);

