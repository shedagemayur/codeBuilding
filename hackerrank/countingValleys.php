<?php

function countingValleys() {
	$n = 8;
	$string = "UDDUDUDUDU";

	$valley = 0;
	$lvl = 0;

	$charArr = str_split($string);

	for ($i=0; $i < count($charArr); $i++) {
		if($charArr[$i] == 'U') {
			$lvl++;
		}
		if($charArr[$i] == 'D') {
			$lvl--;
		}
		if($lvl == 0 && $charArr[$i] == 'U') {
			++$valley;
		}
	}

	echo $valley;
}

countingValleys()

?>