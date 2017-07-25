# get how many breaks to get single squares
var breakChocolate = function(n, m) {
	 return (n*m === 0) ? 0 : n * m - 1;
};

// if n*m === 0 return - else return n*m -1