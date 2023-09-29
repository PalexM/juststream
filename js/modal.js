
async function createModal(url) {

  var modal = document.getElementById("modal");
  var modal_content = document.getElementById("modal_content")
  modal.style.display = "block";
  modal_content.style.display = "block";
  var htmlElements = [
    { tag: 'H2', id: 'modal-title'},
    { tag: 'img', id: 'modal-img'},
    { tag: 'p', id: 'modal-genre', innerHTML : "<strong>Genre :</strong> "},
    { tag: 'p', id: 'modal-date', innerHTML : "<strong>Date :</strong> "},
    { tag: 'p', id: 'modal-rate', innerHTML : "<strong>Rate :</strong> "},
    { tag: 'p', id: 'modal-score', innerHTML : "<strong>Score :</strong> "},
    { tag: 'p', id: 'modal-realisateur', innerHTML : "<strong>Realisateur :</strong> "},
    { tag: 'p', id: 'modal-actors', innerHTML : "<strong>Acteurs :</strong> "},
    { tag: 'p', id: 'modal-duree', innerHTML : "<strong>Duree :</strong> "},
    { tag: 'p', id: 'modal-pays', innerHTML : "<strong>Pays :</strong> "},
    { tag: 'p', id: 'modal-box', innerHTML : "<strong>Box :</strong> "},
    { tag: 'p', id: 'modal-resume', innerHTML : "<strong>Description :</strong> "},
  ];

    htmlElements.forEach(function (element) {
      var newElement = Object.assign(document.createElement(element.tag), element);
      modal_content.appendChild(newElement);
    });


  try {
    var film = await getFilmsDetails(url)
  }
  catch (error) {
    return alert('Il y a une erreur avec ce url =>' + error)
  }

  modal_content.children[0].innerHTML += film['title']
  modal_content.children[1].src = film['image']
  modal_content.children[2].innerHTML += film['genre']
  modal_content.children[3].innerHTML += film['date']
  modal_content.children[4].innerHTML += film['rate']
  modal_content.children[5].innerHTML += film['score']
  modal_content.children[6].innerHTML += film['realisateur']
  modal_content.children[7].innerHTML += film['actors']
  modal_content.children[8].innerHTML += film['duree']
  modal_content.children[9].innerHTML += film['pays']
  modal_content.children[10].innerHTML += film['box']
  modal_content.children[11].innerHTML += film['resume']

}

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
    clearModalContent()

  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      clearModalContent()
    }
  }

  function clearModalContent(){
    var modal_content = document.getElementById("modal_content")
    while (modal_content.firstChild) {
      modal_content.removeChild(modal_content.firstChild);
    }
  }