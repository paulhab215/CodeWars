<?php # cycle digit -  one four character argument - return a multi-dimensional array containing numbers between 0 and that number
function counter_effect($hit_count) {
  $final_arr = [];
  
  for ($i = 0; $i < strlen($hit_count); $i++) {    
     $final_arr[] = range(0, $hit_count[$i]);	// range creates array of range of elements
  }
  
  return $final_arr;
}
}
?>