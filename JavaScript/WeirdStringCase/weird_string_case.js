# return string with every even index uppercase and every odd index lowercase

//Best Practice Solution
function toWeirdCase(string){
  return string.split(' ').map(function(word){ //split each word into an array and map to function
    return word.split('').map(function(letter, index){  //split each letter into an array and map to function
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()  // if index even uppercase else lowercase
    }).join('');
  }).join(' ');
}



//Original Solution
function toWeirdCase(str){
  str = str.split(' ');
    for(var i = 0; i < str.length; i++){
        for(var k = 0, arr = str[i].split(''); k < arr.length ; k+=2 ){ // loop by 2's capitalizing
           arr[k]=arr[k].toUpperCase();
        }
        str[i]= arr.join('');
    }
    return str.join(' ');
}