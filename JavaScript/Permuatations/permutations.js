# return all permuations of given string

//Best Practice
function permutations(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}

//Original Solution
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