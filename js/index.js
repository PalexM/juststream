
function apiCall(url, movies_list = []) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    let response = JSON.parse(xhttp.responseText);
                    movies_list.push(...response.results);
                    if (response.next != null) {
                        apiCall(response.next, movies_list).then(resolve).catch(reject);
                    } else {
                        resolve(movies_list);
                    }
                } else {
                    reject('Erreur ' + xhttp.status);
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

async function callApiAndSortResult(url, limit) {
    const result = await apiCall(url);
    result.sort((a, b) => {
        const sortRating = a.imdb_score.localeCompare(b.imdb_score);

        if (sortRating === 0) {
            return b.votes - a.votes;
        }

        return sortRating
    })
    const limitResults = result.slice(0, limit)
    return limitResults
}


// Best Movie
callApiAndSortResult('http://mrpop.work:8000/api/v1/titles/?&imdb_score_min=9.4', 1).then(bestMovies => {
    bestMovieSection(bestMovies[0].url)
})

// Bests Movies 
callApiAndSortResult('http://mrpop.work:8000/api/v1/titles/?&imdb_score_min=9.3', 7).then(actionMovies => {
    var movies = [];
    for (var i = 0; i < actionMovies.length; i++) {
        var movie = {
            imageUrl: actionMovies[i].image_url,
            title: actionMovies[i].imdb_score,
            location: actionMovies[i].title,
            duration: actionMovies[i].year,
            url: actionMovies[i].url
        };
        movies.push(movie);
    }

    buildCarousel('scrollContainer-cat1', movies);
    addScrollFunctionality('scrollContainer-cat1', 'prevBtn-cat1', 'nextBtn-cat1');
})

// Bests Animations 
callApiAndSortResult('http://mrpop.work:8000/api/v1/titles/?&imdb_score_min=8.5&genre=Animation', 7).then(animationMovies => {
    var movies = [];
    for (var i = 0; i < animationMovies.length; i++) {
        var movie = {
            imageUrl: animationMovies[i].image_url,
            title: animationMovies[i].imdb_score,
            location: animationMovies[i].title,
            duration: animationMovies[i].year,
            url: animationMovies[i].url
        };
        movies.push(movie);
    }
    buildCarousel('scrollContainer-cat2', movies);
    addScrollFunctionality('scrollContainer-cat2', 'prevBtn-cat2', 'nextBtn-cat2');

})


// Bests Comedy
callApiAndSortResult('http://mrpop.work:8000/api/v1/titles/?&imdb_score_min=8.5&genre=Comedy', 7).then(comedyMovies => {
    var movies = [];
    for (var i = 0; i < comedyMovies.length; i++) {
        var movie = {
            imageUrl: comedyMovies[i].image_url,
            title: comedyMovies[i].imdb_score,
            location: comedyMovies[i].title,
            duration: comedyMovies[i].year,
            url: comedyMovies[i].url
        };
        movies.push(movie);
    }
    buildCarousel('scrollContainer-cat3', movies);
    addScrollFunctionality('scrollContainer-cat3', 'prevBtn-cat3', 'nextBtn-cat3');
})

async function bestMovieSection(url) {
    const bestMovieDiv = document.getElementById('bestMovieDiv');
    const nameTitle = document.getElementById('nameTitle');
    const seasonDetailsTitle = document.getElementById('seasonDetailsTitle');
    try {
        var movie = await getFilmsDetails(url)
    }
    catch (error) {
        return alert('Il y a une erreur avec ce url =>' + error)
    }



    bestMovieDiv.style.backgroundImage = `url(${movie['image']})`
    bestMovieDiv.style.backgroundSize = "600px 400px"
    bestMovieDiv.style.backgroundPosition = "center"
    nameTitle.textContent = movie['title']
    seasonDetailsTitle.textContent = movie['date']

    bestMovieDiv.addEventListener("click", function () {
        createModal(url)
    });
}


function showHideText() {
    var textElement = document.getElementById("best-description");
    if (textElement.style.display === "none" || textElement.style.display === "") {
      textElement.style.display = "block";
    } else {
      textElement.style.display = "none";
    }
  }