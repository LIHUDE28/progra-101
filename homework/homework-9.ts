function heroesThatStartsWith(nameList: string[], letter: string){
  let newNameList: string [] = [];
  /*let newNameList: string [] = [];
  for(let i = 0; i < nameList.length; i++){
    let name: string = nameList[i];
    if (name.startsWith(letter)){
      newNameList.push(name);
     
    }
  return newNameList;
  }*/

  for(let name of nameList){

    if ( name.startsWith(letter) ) {
      newNameList.push( name );
  }
}
return newNameList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );

console.log(herosWithLetterS);