<?php # label_printer - return percent match

function printerError($s) {
  $numfound = 0;
  $length=strlen($s);
  for ($i=0; $i<$length; $i++) {  
    if(ord($s[$i]) < 97 || ord($s[$i]) > 109){
      $numfound += 1;
    }     
  }  
  $final = $numfound."/".$length;
  return $final;
}

?>