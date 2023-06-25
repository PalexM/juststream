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

    
    // ... adaugă datele pentru alte filme aici
  ];


  buildCarousel('scrollContainer-cat1', movieData);
  addScrollFunctionality('scrollContainer-cat1', 'prevBtn-cat1', 'nextBtn-cat1');
  
  buildCarousel('scrollContainer-cat2', movieData);
  addScrollFunctionality('scrollContainer-cat2', 'prevBtn-cat2', 'nextBtn-cat2');
  
  buildCarousel('scrollContainer-cat3', movieData);
  addScrollFunctionality('scrollContainer-cat3', 'prevBtn-cat3', 'nextBtn-cat3');

  

let bestMovieDiv = document.getElementById('bestMovieDiv');
let nameTitle = document.getElementById('nameTitle');
let seasonDetailsTitle = document.getElementById('seasonDetailsTitle');
let descriptionText = document.getElementById('descriptionText');

bestMovieDiv.style.backgroundImage = "url('https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg')";

nameTitle.textContent = "Name";
seasonDetailsTitle.textContent = "Season Details";
descriptionText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti iste voluptatum impedit nam a odit deleniti voluptatibus minus architecto? Est at accusamus fugiat atque inventore quaerat repellendus dignissimos quasi vero.";


var span = document.getElementsByClassName("close")[0];

function showModal(url) {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  createModal(modal);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if(this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response)
      } else {
        console.error("Error " + this.status);
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}




function createModal(modal){
  var htmlElements = [
    {tag: 'H2', class: 'modal-title'},
    {tag: 'img', class: 'modal-img'},
    {tag: 'p', class: 'modal-genre'},
    {tag: 'p', class: 'modal-date'},
    {tag: 'p', class: 'modal-rate'},
    {tag: 'p', class: 'modal-score'},
    {tag: 'p', class: 'modal-realisateur'},
    {tag: 'p', class: 'modal-actors'},
    {tag: 'p', class: 'modal-duree'},
    {tag: 'p', class: 'modal-pays'},
    {tag: 'p', class: 'modal-box'},
    {tag: 'p', class: 'modal-resume'}
];

  htmlElements.forEach(function(element) {
    modal.appendChild(
      Object.assign(
        document.createElement(element.tag),{
          className: element.class
        }
      )
    )
  });
}

function updateModal(title, image, genre, date, rate, score, realisateur, actors, duree, pays, box, resume){

}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
