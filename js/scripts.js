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
  }
];


  function add(name,height,type) { /*Add Additional Pokemon Attributes To Object Array*/
    repository.push(name,height,type);

  }
    function catchAll() {
    return repository;
  }
    return {
    add: add,
    catchAll: catchAll
  };
})();

console.log(pokemonRepository.catchAll());
pokemonRepository.add({ name:'Squirtle',height:1.08,type:['Water']});
console.log(pokemonRepository.catchAll());

pokemonRepository.catchAll().forEach(function(property) { /* Applied For Each Loop To Pokedex Array */
  document.write("<br>"+"Name: "+property.name + "  | Height: "+property.height+" | Type: "+property.type);
  if(property.height > 5){
     document.write("  (- Wow that is a big Pokemon!)")
}
document.write("<p>");
});
