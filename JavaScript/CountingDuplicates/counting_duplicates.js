# return count of char count greater then 1

//Best Practice Solutions
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//Original solution
function duplicateCount(text){
  var xx = 0; var freq = {};
  
  text.toLowerCase().split('').forEach(function(s) {
     if (freq[s]) {    
        if(freq[s] == 1){
           xx = xx + 1;
        }
        freq[s]++;
      } else {
         freq[s] = 1;
      }
  });
  return xx;
}