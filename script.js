const API_KEY = "a985bd293bd29acd480082b13500e1e7";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=a985bd293bd29acd480082b13500e1e7&query=furious";

//Selecting elements from the DOM
const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");
const movieSearchable = document.querySelector("#movies-searchable");

function movieSection(movies) {
  return movies.map(movie => {
    return `<img src=${movie.poster_path} data-movie-id= ${movie.id}/> 
    
    `;
  });
}

function createMovieContainer(movies) {
  const movieElement = document.createElement("div");
  movieElement.setAttributes("class", "movie");

  const movieTemplate = `
  
        <section class="section">
        ${movieSection(movies)}
        
        </section>
        
        <div class="content">
        
        <p id="content-close">x</p>
        </div>
        
        `;

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}

buttonElement.onclick = function(event) {
  event.preventDefault();
  const value = inputElement.value;

  const newUrl = url + "&query=" + value;

  fetch(newUrl)
    .then(res => res.json())
    .then(data => {
      // data.results []

      const movies = data.results;
      const movieBlock = createMovieContainer(movies);
      movieSearchable.appendChild(movieBlock);

      console.log("Data: ", data);
    })
    .catch(error => {
      console.log("Error:", error);
    });
  console.log("Value:", value);
};

