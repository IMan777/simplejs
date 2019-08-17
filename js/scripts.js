var pokemonRepository = (function () { /*Pokedex Object Array Placed Inside IIFE*/
 "use strict";
var repository = [ ];

 var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 function addListItem(pokemon){
        var pokelist = document.querySelector('.pokemon-list');  /*List Item & Button Tags Together with CSS-Class Styles Created */
        var listitem = document.createElement('li');
        pokelist.appendChild(listitem);
        var btn = document.createElement('button');
        listitem.appendChild(btn);
        btn.innerText=pokemon.name;
        btn.classList.add('poke-btn');
        listitem.classList.add('pokeitem');
        btn.addEventListener('click', function(event) { /*Click Button Event Listener Used To Display showDetails Function Properties */
        showDetails(pokemon);
    });
  }

 function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
    showModal(item);
    });
  }
function add(name) { /*Add Additional Pokemon Attributes To Object Array*/
      repository.push(name);

  }

  function catchAll() { /* Function Used To Return Pokedex Object Array*/
      return repository;
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (error) { /*Load Functions Set In Order To Retrieve Data From Pokemon API*/
      console.error(error);
    });
  }
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = Object.keys(details.types);
    }).catch(function (error) {
          console.error(error);
    });
  }
/*Model Definition Start*/
function showModal(item){

    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.innerHTML = '';
    $modalContainer.classList.add('is-visible');

    var pokemodal = document.createElement('div');
    pokemodal.classList.add('modal');
    $modalContainer.appendChild(pokemodal);


    var closeModalBtn = document.createElement('button');
    closeModalBtn.classList.add('modal-close');
    closeModalBtn.innerText="Close";
    pokemodal.appendChild(closeModalBtn);
    closeModalBtn.addEventListener('click', hideModal);

    var modalTitle = document.createElement('h1');
    modalTitle.innerText = item.name;
    modalTitle.classList.add('modal-title');
    pokemodal.appendChild(modalTitle);

    var modalImg = document.createElement('img');
    modalImg.classList.add('poke-img');
    modalImg.setAttribute('src',item.imageUrl);
    pokemodal.appendChild(modalImg);

    var pokeHeight = document.createElement('p');
    pokeHeight.innerText = 'Height: ' + item.height;
    pokeHeight.classList.add('modal-para');
    pokemodal.appendChild(pokeHeight);

    var pokeWeight = document.createElement('p');
    pokeWeight.innerText = 'Weight: ' + item.weight;
    pokeWeight.classList.add('modal-para');
    pokemodal.appendChild(pokeWeight);
  }

function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

window.addEventListener('keydown', function(event) {
    var $modalContainer = document.querySelector('#modal-container');
    if (
      event.key === 'Escape' &&
      $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
  });

  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', function(event) {
    var target = event.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });
/*Model Definition Start*/
return {  /*Return All Previous Function In Order To Be Available Outside Of IIFE */
      add: add,
      catchAll: catchAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showModal: showModal,
      hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  "use strict";
  pokemonRepository.catchAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
