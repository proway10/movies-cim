let total_movies = 0;
let baseURL = window.location.origin; 
let posterRelativeURL = 'https://image.tmdb.org/t/p/w500/';
let backdropRelativeURL = 'https://image.tmdb.org/t/p/w1280/';

var moviesList = {
    totalMovies: 0, 
    gridItems: 12,
    paginationTabs: 0,
    paginateHTML: ['<li>', '</li>'],
    finalHtml: '',
    setPaginationTabs: function(){
        let totalPaginateButtons = this.totalMovies / 12; 

        for (let i = 1; i < totalPaginateButtons; i++) 
        { 
            this.finalHtml += this.paginateHTML[0] + i + this.paginateHTML[1];
        }
        return this.finalHtml;        
    },    
    generateHtml: function(data) {

        let htmlBox = '';

        for (let movieDetail of data) 
        {    
            let date = getDateStringFormat(movieDetail.releaseDate);  
            let slug = `${baseURL}/detail?slug=${movieDetail.slug}&id=${movieDetail._id}`;

            htmlBox += `<div class="col-6 col-md-4 col-lg-3">
                    <div class="list-box" data-id="${movieDetail._id}">
                        <a href="${slug}">
                            <img src="${posterRelativeURL}${movieDetail.posterURL}" class="list-image" alt="">
                        </a>
                        <div class="list-description">
                            <a href="${slug}" class="list-title">${movieDetail.title}</a>
                            <span class="list-date">
                                ${date}
                            </span>
                        </div>
                    </div>
                </div>`;
        }

        this.finalHtml = htmlBox; 
    }
};


function getDateStringFormat(datetimestamp){
    let date = new Date(datetimestamp);
    let day = date.getDate();
    let month = date.toLocaleString('en-us', { month: 'long' });
    let year = date.getFullYear();
    return month + ' ' + day + ', ' + year;
}
