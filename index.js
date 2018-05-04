function theBeatlesPlay(arrayOFMusicians, arrayOfInstruments) {
  
  var emptyArray=[];
  
  for(var i = 0; i < arrayOFMusicians.length; i++){
    emptyArray.push(`${arrayOFMusicians[i]} plays ${arrayOfInstruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(arrayOfFacts){
  var i = 0;
  while(i < arrayOfFacts.length){
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
    console.log(arrayOfFacts[i]);
    i++;
  }
  return arrayOfFacts;
}