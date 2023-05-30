function fetchMovieDetails() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzY3NzZkNjc5ZmRmZDEwZmFlYTY1Y2E1OTBkODUxNiIsInN1YiI6IjY0NzY0NzJmNjc0M2ZhMDEzNmVmMzJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IiTp5XQh-L0excjHIx5Pw4pAy81h52Rwu-vF0zLuLnY'
    }
  };

  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementsByClassName('container')[0];
      const movies = data.results.slice(0, 6); // Slice the first 6 elements
      movies.forEach(movie => {
        const movieTile = document.createElement('div');
        movieTile.className = 'movie-tile';
        const movieImage = document.createElement('div');
        movieImage.className = 'movie-image';
        const movieDetails = document.createElement('div');
        movieDetails.className = 'movie-details';
        const movieTitle = document.createElement('h2');
        movieTitle.className = 'movie-title';
        movieTitle.textContent = movie.title;
        const movieRating = document.createElement('p');
        movieRating.className = 'movie-rating';
        movieRating.textContent = `Rating: ${movie.vote_average}`;
        const movieGenre = document.createElement('p');
        movieGenre.className = 'movie-genre';
        movieGenre.textContent = `Fantasy`;
        const movieYear = document.createElement('p');
        movieDetails.appendChild(movieGenre);
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieRating);
        movieTile.appendChild(movieImage);
        movieTile.appendChild(movieDetails);
        container.appendChild(movieTile);
      });
    })
    .catch(err => console.error(err));
}

// Call the function to fetch movie details when the page loads
window.onload = fetchMovieDetails;
