# return all permuations of given string

function permutations(string) {
  var final = [];
  
  if(string.length == 1){
    return [string];   
  }else{
    var beforefinal = permutations(string.slice(1));
    for (var j = 0; j < beforefinal.length; j++) {
      for (var k = 0; k < beforefinal[j].length+1; k++) {
        var perm = beforefinal[j].slice(0,k)+string[0]+beforefinal[j].slice(k);
        final.push(perm);         
      }
    }
    return unique(final);
  }  
}

function unique(array) {
  var returnarr = [];

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (returnarr.indexOf(item) === -1) {
      returnarr.push(item);
    }
  }

  return returnarr;
}