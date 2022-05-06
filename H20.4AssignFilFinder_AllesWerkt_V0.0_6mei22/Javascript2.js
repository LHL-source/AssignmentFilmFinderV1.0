/* Declaration of : querySelector(all)--------------------------------------------*/


var movieItemsId = document.querySelector('#movieItemsId');
var newMovieId = document.querySelector('#newMovie');
var movieAllLi = document.querySelectorAll('#newMovie, #avengers, #men, #princess, #batman');
var avengersId = document.querySelector('#avengers');
var menId = document.querySelector('#men');
var princessId = document.querySelector('#princess');
var batmanId = document.querySelector('#batman');


/*getMovies: function newLiM0v------------------*/

function newLiMov(eachMovie) {

    console.log('eachMovie:', eachMovie);
    var newLi1 = document.createElement('li');
    var newImg2 = document.createElement('img');
    var newA = document.createElement('a');
    var movieUl1 = document.querySelector('#containerIdItems');

    var ul1AppNewLi = movieUl1.appendChild(newLi1);
    var newLi1AppNewA = newLi1.appendChild(newA);

    newA.href = "https://www.imdb.com/title/" + eachMovie.imdbID;

    var newAAppNewImg2 = newA.appendChild(newImg2);
    newAAppNewImg2.src = (eachMovie.poster);
    var newImg3 = newAAppNewImg2.src;

    return newLi1
}


/*function get ALL movies for start screen -----------------------------*/

function getMovies() {

    const movieMap = movies.map((currentMovie) => {
        newLiMov(currentMovie);
        return newLiMov
    });
}
getMovies(movies)


/*Remove movies ,Function:removMovies------------------------------------------*/
function removeMovies() {

    var parentContUL1 = document.querySelector('#containerIdItems');
    var childLi1 = document.querySelectorAll('#newMovie, #avengers, #men, #princess, #batman ');
    parentContUL1.innerHTML = "";
}

/* searchBar-----------------------------------------------------------------*/
const searchBar = document.querySelector('#searchBar');

let searchMvList = [];

searchBar.addEventListener('keyup', (e) => {
    removeMovies();
    const searchString = e.target.value.toLowerCase();
    const filterMv = movies.filter((currentMv) => {
        var testMvTit = currentMv.title;
        var testMwTitLow = currentMv.title.toLowerCase().includes(searchString);
        return testMwTitLow
    })
    filterMv.forEach((eachItem) => {
        newLiMov(eachItem);
        return newLiMov
    })

    return
})



/*Start EventListener and switch:make the eventlisener for the ul-------------------------------*/

movieItemsId.addEventListener('change', (movieAllLi) => {

    var targetValue = movieAllLi.target.value;


    removeMovies();

    /*switch-----------------------------------*/
    switch (targetValue) {
        case 'newMovie':
            var movie1 = movies.filter((moviesEachItem) => {

                var onlyMovie = moviesEachItem.type;
                var moviesYearPars = parseInt(moviesEachItem.year);

                return moviesYearPars >= 2014

            });

            movie1.forEach((item) => {
                newLiMov(item);
                return newLiMov
            })

            break;

        case 'avengers':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })

            movie1.forEach((item) => {
                newLiMov(item);
                return newLiMov
            })

            break;

        case 'men':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes('x-men');
            })

            movie1.forEach((item) => {
                newLiMov(item);
                return newLiMov
            })

            break;

        case 'princess':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })

            movie1.forEach((item) => {
                newLiMov(item);
                return newLiMov
            })

            break;

        case 'batman':
            var movie1 = movies.filter(movie => {
                return movie.title.toLowerCase().includes(targetValue);
            })

            movie1.forEach((item) => {
                newLiMov(item);
                return newLiMov
            })

            break;

        default:
            console.log('switchDefault: sorry chose a button');
    }

})

/*switch en eventListener end--------------------------------------------------------------*/