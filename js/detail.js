let url_string = window.location.href; 
let url = new URL(url_string);
let id = getID(url_string);
let apiURL = 'https://backend-ygzsyibiue.now.sh/api/v1/movies/' + id;



/* Delete Movie */
$(function(){
    $('#delete-movie').click(function(){
        deleteData(apiURL);                 
    })  
})

function getID(url){
    var arrayURL = url.split("-"); 
    var id = arrayURL[arrayURL.length - 1]; 
    return id;
}



fetch(apiURL)
    .then(response => {
        return response.json();
    })
    .then(data => {

        $('#backdrop-image-top').attr('src', backdropRelativeURL + data.backdropURL);
        $('#backdrop-poster').attr('src', posterRelativeURL + data.posterURL);
        $('.movie-title').html(data.title);
        $('.movie-release-date').html(getDateStringFormat(data.releaseDate));
        $('.movie-data').html(data.plot);

        //SEO
        $('title').html(data.title);

    })
    .catch(err => {

    });


function deleteData(url) {
  return fetch(url, {
    method: 'delete'
  }).then(data=>{
      if (data.status == 204) {
          $(document).find('.delete-alert').show();
          $(document).find('.delete-alert').removeClass('fade');
          setTimeout(function () {
              window.location.replace(baseURL);
          }, 2000);
      } 
  });
}