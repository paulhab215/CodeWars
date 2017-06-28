<?php # wave

function wave($people){
  $final_arr = [];
  
  for ($i = 0; $i < strlen($people); $i++) { 
    $tempstring = "";
    for ($x = 0; $x < strlen($people); $x++) { 
      if($x == $i){
        $tempstring .= strtoupper($people[$x]);
      }else{
        $tempstring .= $people[$x];
      }
    }
    if($tempstring != $people){
      $final_arr[] = $tempstring;
    }
  }
  return $final_arr;
}
?>