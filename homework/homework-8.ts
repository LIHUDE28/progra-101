function largestNameOfArray(arrayName: string[]){

  let largestname = '';
  for(let i = 0; i < arrayName.length; i++){
    let name = arrayName[i];
    if (name.length >= largestname.length){
    
      largestname = name; 
  }
}
  return largestname;
}


