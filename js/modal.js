async function createModal(url) {
  var modal = document.getElementById("modal");
  var modal_content = document.getElementById("modal_content")
  modal.style.display = "block";
  modal_content.style.display = "block";
  var htmlElements = [
    { tag: 'H2', id: 'modal-title' },
    { tag: 'img', id: 'modal-img' },
    { tag: 'p', id: 'modal-genre' },
    { tag: 'p', id: 'modal-date' },
    { tag: 'p', id: 'modal-rate' },
    { tag: 'p', id: 'modal-score' },
    { tag: 'p', id: 'modal-realisateur' },
    { tag: 'p', id: 'modal-actors' },
    { tag: 'p', id: 'modal-duree' },
    { tag: 'p', id: 'modal-pays' },
    { tag: 'p', id: 'modal-box' },
    { tag: 'p', id: 'modal-resume' },
  ];
  htmlElements.forEach(function (element) {
    modal_content.appendChild(
      Object.assign(
        document.createElement(element.tag), {
        id: element.id
      }
      )
    )
  });

  try {
    var film = await getFilmsDetails(url)
  }
  catch (error) {
    return alert('Il y a une erreur avec ce url =>' + error)
  }

  modal_content.children[0].innerText = film['title']
  modal_content.children[1].src = film['image']
  modal_content.children[2].innerText = film['genre']
  modal_content.children[3].innerText = film['date']
  modal_content.children[4].innerText = film['rate']
  modal_content.children[5].innerText = film['score']
  modal_content.children[6].innerText = film['realisateur']
  modal_content.children[7].innerText = film['actors']
  modal_content.children[8].innerText = film['duree']
  modal_content.children[9].innerText = film['pays']
  modal_content.children[10].innerText = film['box']
  modal_content.children[11].innerText = film['resume']

}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
