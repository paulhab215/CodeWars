<?php # label_printer - return percent match

function printerError($s) {
	return strlen(preg_replace('/a-m/', '', $s))."/".strlen($s);  //replace all correct letters with blank and get lengths
}
?>