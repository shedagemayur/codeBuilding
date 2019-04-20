<?php

function repeatedString() {
	$n = 10;
	$s = 'acab';

	if(strlen($s) == 1) {
		if($s == 'a') {
			return $n;
		}else{
			return 0;
		}
	}
	$countCharA = substr_count($s, 'a');
	$repetition = intval($n/strlen($s));

	$repeatChar = $countCharA * $repetition;

	$repeatChar += substr_count(substr($s, 0, $n % strlen($s)), 'a');

	echo $repeatChar;
}

repeatedString()

?>