var repository = [ /* Pokedex Object Array*/
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

for(var i=0;i<repository.length;i++){ /* For Loop Applied To Pokedex Object Array */

  document.write("<br>"+"Name: "+repository[i].name + "  | Height: "+repository[i].height+" | Type: "+repository[i].type);

  if(repository[i].height > 5){
       document.write("  (- Wow that is a big Pokemon!)")
}
  document.write("<p>");
}
