const NumberOfFilms = +prompt("How many films did you see?","");
const PersonalMovieDB = {
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
}
const a = prompt('What is the last cinema did you see?'),
      b = prompt("How many stars did you put for this film?"),
      c = prompt('What is the last cinema did you see?'),
      d = prompt("How many stars did you put for this film?");

for (let i =0;i<2;i++){
    const a = prompt('What is the last cinema did you see?',''),
          b = prompt("How many stars did you put for this film?",'');
          PersonalMovieDB.movies[a]=b;
    if (a!=null && b!=null && a!='' && b!='' && a.length<50){
        PersonalMovieDB[a]=b;
        console.log("done")
          } else{
            console.log('error!');
            i--;
          }
}
console.log(PersonalMovieDB)

if (PersonalMovieDB.count <10){
    console.log('A few')
} else if(PersonalMovieDB.count>=10 && PersonalMovieDB.count<=30){
    console.log('Basic')
} else if (PersonalMovieDB.count>30){
    console.log('Cinema fan')
} else {
    console.log('Error')
}









