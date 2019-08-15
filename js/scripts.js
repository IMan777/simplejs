var pokemonRepository = (function () { /*Pokedex Object Array Placed Inside IIFE*/
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
    console.log(item);
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
    }).catch(function (error) {
      console.error(error);
    })
  }
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }
return {  /*Return All Previous Function In Order To Be Available Outside Of IIFE */
      add: add,
      catchAll: catchAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {

  pokemonRepository.catchAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
