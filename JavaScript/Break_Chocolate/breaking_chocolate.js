# get how many breaks to get single squares
var breakChocolate = function(n, m) {
     if((n>1 && m>1) || (n==1 && m>1) || (n>1 && m==1))
      return n*m-1;
    else    
      return 0;
};