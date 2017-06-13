<?php # dna strand return compliment array

function DNA_strand($dna) {
  $arraycheck = array('A','T','C','G');
  $arrayoppos = array('T','A','G','C');  

  $compliment = "";
  for ($i=0; $i<strlen($dna); $i++) {
    $key = array_search($dna[$i], $arraycheck); 
    $compliment .= $arrayoppos[$key]; //capture key and use on opposite array.
  }  
  return $compliment;
}

?>