var pokemonRepository = (function () { /*Pokedex Object Array Placed Inside IIFE*/
  var repository = [
  {
      name:'Blubasaur',
      height:2.04,
      type:['Grass','Poison']
  },
  {
      name:'Charizard',
      height:5.07,
      type:['Fire','Flying']
  },
  {
      name:'Pikachu',
      height:1.04,
      type:['Electric']
  },
  {
      name:'Dragonite',
      height:7.03,
      type:['Dragon','Flying']
  },
  {
      name:'Gyarados',
      height:21.04,
      type:['Water','Flying']
  },
   {
      name:'Squirtle',
      height:1.08,
      type:['Water']
  }
];
   function showDetails(pokemon) {
      console.log("Name: "+pokemon.name + "  | Height: "+pokemon.height+" | Type: "+pokemon.type); /*Pokemon Attributes Displayed in Console Log*/
  }
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


  function add(name,height,type) { /*Add Additional Pokemon Attributes To Object Array*/
      repository.push(name,height,type);

  }
    function catchAll() { /* Function Used To Return Pokedex Object Array*/
      return repository;
  }
    return {  /*Return All Previous Function In Order To Be Available Outside Of IIFE */
      add: add,
      catchAll: catchAll,
      addListItem: addListItem,
  };
})();

/*pokemonRepository.add({ name:'',height:'',type:[]}); */ /*Reserved To Add Additional Pokemon To Pokedex Object Array */

pokemonRepository.catchAll().forEach(function(property) {

      pokemonRepository.addListItem(property); /*For Each Used To Cycle Through addListItem Function Properties */
});
