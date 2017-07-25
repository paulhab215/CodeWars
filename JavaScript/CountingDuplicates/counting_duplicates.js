# return count of char count greater then 1
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