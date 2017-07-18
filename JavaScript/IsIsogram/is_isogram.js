# return true for only unique charactered strings
function isIsogram(str){
  var xx = true;
  var freq = {};

  str.toLowerCase().split('').forEach(function(s) {
       if (freq[s]) {
            xx = false;
        } else {
           freq[s] = 1;
        }
  });
  return xx;
}