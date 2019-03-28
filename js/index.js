let apiURL = 'https://backend-ygzsyibiue.now.sh/api/v1/movies/';

fetch(apiURL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        this.moviesList.totalMovies = data.length;
        this.moviesList.generateHtml(data);
        $('.listing-wrapper').html(this.moviesList.finalHtml);
    })
    .catch(err => {

    });
