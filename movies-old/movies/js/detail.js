let url_string = window.location.href; 
let url = new URL(url_string);
let id = url.searchParams.get("id");
let apiURL = 'https://backend-ygzsyibiue.now.sh/api/v1/movies/' + id;
 
fetch(apiURL)
    .then(response => {
        return response.json();
    })
    .then(data => {

        $('#backdrop-image-top').attr('src',backdropRelativeURL+data.backdropURL);
        $('#backdrop-poster').attr('src',posterRelativeURL+data.posterURL);
        $('.movie-title').html(data.title);
        $('.movie-release-date').html(getDateStringFormat(data.releaseDate));
        $('.movie-data').html(data.plot);
        
        //SEO
        $('title').html(data.title);
        
    })
    .catch(err => {

    });
 