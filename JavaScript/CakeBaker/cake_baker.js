# return max number of cakes that can be baked for a recipe based on available ingrediants

// Best Practice Solution
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}


// Original Solution
function cakes(recipe, available) {
    var maxcakes = [];
    for (var ingrediants in recipe) {
        var recipeIngrediants = recipe[ingrediants] || 0;      
        var availableIngrediants = available[ingrediants] || 0;
        if (recipeIngrediants > 0) {
          var maxnum = Math.floor(availableIngrediants / recipeIngrediants);
          maxcakes.push(maxnum);
        }
    }
    return Math.min.apply(Math, maxcakes);
}