<?php # consecutive string - get $k consecutive longtest length string
function longestConsec($strarr, $k) {

	if($k <= 0 || $k > count($strarr)){return "";}

	$full = array();
  	foreach ($strarr as $key => $value) {
   		$full[] = join('', array_slice($strarr, $key, $k));    
  	}
  	
	$lengths = array_map('strlen', $full);
  	return $full[array_search(max($lengths), $lengths)];
}
?>


