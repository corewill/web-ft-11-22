const searchMovies = async () => {
const movieCardContainer = document.querySelector(".movieCardContainer");
movieCardContainer.innerHTML = "";

const inputField = document.querySelector(".searchField").value.replace(/\s/g, "+");
console.log(inputField);
const movieURL = `http://www.omdbapi.com/?apikey=f8f7d8c6&s=${inputField}`;

const rawData = await fetch(movieURL);
const json = await rawData.json();
console.log(json)

json.Search.forEach(async (movie) => {
    
    const movieCard = document.createElement("div");

    const moviePoster = document.createElement("img");
    const movieTitle = document.createElement("H2");
    const movieDescription = document.createElement("P");
    const movieYear = document.createElement("P");
    const imdbID = movie.imdbID;
    const individualMovieData = `http://www.omdbapi.com/?apikey=f8f7d8c6&i=${imdbID}`;
    const fetchIndividualMovie = await fetch(individualMovieData);
    const individualJson = await fetchIndividualMovie.json();
    console.log(imdbID);

    moviePoster.src = individualJson.Poster;
    moviePoster.classList = "moviePoster";
    movieCard.classList = "movieCard";
    movieTitle.innerText = individualJson.Title;
    movieDescription.innerText = individualJson.Plot;
    movieYear.innerText = individualJson.Year;

    movieCard.append(moviePoster,movieTitle,movieDescription,movieYear)
    movieCardContainer.append(movieCard)
});


};

const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", searchMovies);

