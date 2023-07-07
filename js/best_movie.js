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


const movieData = [
    {
        imageUrl: "https://via.placeholder.com/300/ff7f7f",
        title: "Titlu film 1",
        location: "Locație film 1",
        duration: "Durată film 1"
    },
    {
        imageUrl: "https://via.placeholder.com/300/5f7f7f",
        title: "Titlu film 2",
        location: "Locație film 2",
        duration: "Durată film 3"
    },
    {
        imageUrl: "https://via.placeholder.com/300/1f7f7",
        title: "Titlu film 3",
        location: "Locație film 3",
        duration: "Durată film 3"
    },
    {
        imageUrl: "https://via.placeholder.com/300/7f7f7f",
        title: "Titlu film 3",
        location: "Locație film 3",
        duration: "Durată film 3"
    },
    {
        imageUrl: "https://via.placeholder.com/300/9f7f7f",
        title: "Titlu film 4",
        location: "Locație film 4",
        duration: "Durată film 4"
    },
    {
        imageUrl: "https://via.placeholder.com/300/2f7f7f",
        title: "Titlu film 5",
        location: "Locație film 5",
        duration: "Durată film 5"
    },
    {
        imageUrl: "https://via.placeholder.com/300/1f7f7f",
        title: "Titlu film 6",
        location: "Locație film 6",
        duration: "Durată film 6"
    },
    {
        imageUrl: "https://via.placeholder.com/300/0f7f7f",
        title: "Titlu film 7",
        location: "Locație film 7",
        duration: "Durată film 7"
    },


];


buildCarousel('scrollContainer-cat1', movieData);
addScrollFunctionality('scrollContainer-cat1', 'prevBtn-cat1', 'nextBtn-cat1');

buildCarousel('scrollContainer-cat2', movieData);
addScrollFunctionality('scrollContainer-cat2', 'prevBtn-cat2', 'nextBtn-cat2');

buildCarousel('scrollContainer-cat3', movieData);
addScrollFunctionality('scrollContainer-cat3', 'prevBtn-cat3', 'nextBtn-cat3');

  // ******************** End Carousel ***************************//
