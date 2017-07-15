<?php # consecutive string - get $k consecutive longtest length string
function longestConsec($strarr, $k) {

$full = array();
  for($i=0;$i<count($strarr);$i++){
    $full[$i] = $strarr[$i];
    for($j=1;$j<$k;$j++){
      if(isset($strarr[$i+$j])){
          $full[$i] .= $strarr[$i+$j];
      }
    }
  }
  
  if($k <= 0 || $k > count($full)){return "";}
  $lengths = array_map('strlen', $full);
  return $full[array_search(max($lengths), $lengths)];
}
?>