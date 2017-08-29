# return 1 if they first has three consec and second has 2 consec integers found in num 1

//Best Practice Solution
function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}


// Original Solution
function tripledouble(num1, num2) { 
  var arrtrip = (String(num1).match(/([0-9])\1\1/g) || []); // would return array of triples
  var arrdub  = (String(num2).match(/([0-9])\1/g) || []); // would return array of doubles

  triples = triples.map(function(val) {
    return val.slice(0,2); // this will return double version of triple array ["99", "88"]
  }).filter(function(n) {
    return arrdub.indexOf(n) != -1;  // check to see if trip version exists in double
  });
  if (triples.length > 0) {
    return 1; 
  } else {
    return 0;
  } 
}