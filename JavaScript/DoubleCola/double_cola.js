# return the person who drink n-th can of cola

//Best Practices Solution
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}


// Original Solution
function whoIsNext(names, r){
  let flagged=false, count=0, total=0, len = names.length;
  if(r <= names.length){
    return names[r-1];
  }
  while(total < r && !flagged){
    total += len * (Math.pow(2, count))
    count++;
    if(total + len * (Math.pow(2, count)) >= r){
      flagged = true;
    }
  }
  var numplace = Math.pow(2, count);
  var remain = r - total;
  var position = Math.ceil(remain/numplace);
  return names[position-1];
}