<?php # return word of the average number of number strings

function average_string(string $s): string {
  	$numwords = [			//comparison array
		'zero'	=> 0, 
		'one'	=> 1, 
		'two'	=> 2, 
		'three'	=> 3, 
		'four'	=> 4,
		'five'	=> 5,
		'six'	=> 6,
		'seven'	=> 7,
		'eight'	=> 8,
		'nine'	=> 9,
	];
      
	$wordstrings = explode(' ', $s);
	foreach($wordstrings as $number) {
		if(!isset($numwords[$number])) { return "n/a"; } // if number greater then 9 or null return
		$finalarr[] = $numwords[$number];
	}

	$arrcount = count($finalarr);
	$numsum   = array_sum($finalarr);
	$flip     = array_flip($numwords); //Exchanges all keys with their associated values in an array

	return $flip[floor($numsum/$arrcount)]; // return inverse of array above basedon mean
}
?>