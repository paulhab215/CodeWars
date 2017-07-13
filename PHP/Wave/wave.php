<?php # wave
function wave($people){
  $final = [];
  
  for($i = 0; $i < strlen($people); $i++) {
    if(ctype_space($people[$i])) continue; //check for whitespace
    $final[] = substr_replace($people, strtoupper($people[$i]), $i, 1);
  }
  return $final;
}
?>