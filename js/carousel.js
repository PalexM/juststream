const xhttp = new XMLHttpRequest();

function getFilmsDetails(url) {
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          let response = JSON.parse(this.responseText);
          resolve({
            'title': response.title,
            'image': response.image_url,
            'genre': response.genres,
            'date': response.date_published,
            'rate': response.rated,
            'score': response.imdb_score,
            'realisateur': response.directors,
            'actors': response.actors,
            'duree': response.duration,
            'pays': response.countries,
            'box': response.worldwide_gross_income,
            'resume': response.long_description,
            'description': response.description
          })
        } else {
          reject("Error " + this.status);
        }
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}


// ******************* Carousel *******************//

function buildCarousel(containerId, movieData) {
  const container = document.getElementById(containerId);

  for (let movie of movieData) {
    let movieElement = document.createElement('div');
    movieElement.className = 'carousel-item';

    let img = document.createElement('img');
    img.src = movie.imageUrl;

    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = movie.title;

    let location = document.createElement('div');
    location.className = 'location';
    location.textContent = movie.location;

    let duration = document.createElement('div');
    duration.className = 'duration';
    duration.textContent = movie.duration;

    movieElement.appendChild(img);
    movieElement.appendChild(title);
    movieElement.appendChild(location);
    movieElement.appendChild(duration);
    container.appendChild(movieElement);
    movieElement.addEventListener("click", function () {
      createModal(movie.url)
    });
  }
}

function addScrollFunctionality(containerId, prevButtonId, nextButtonId) {
  const btnNext = document.getElementById(nextButtonId);
  const btnPrev = document.getElementById(prevButtonId);
  const container = document.getElementById(containerId);

  btnNext.addEventListener('click', () => {
    container.scrollLeft += 300;
  });

  btnPrev.addEventListener('click', () => {
    container.scrollLeft -= 300;
  });
}


// ******************** End Carousel ***************************//


function print(msg) {
  console.log(msg)
}