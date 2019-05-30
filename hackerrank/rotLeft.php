<?php

function rotLeft() {
	$d = 2;
	$a = array(1, 2, 3, 4, 5);
	$leftRotated = array();

	for ($i=0; $i < count($a); $i++) {
		$newLoc = ($i + (count($a) - $d)) % count($a);

		$leftRotated[$newLoc] = $a[$i];
	}
	ksort($leftRotated);
	print_r($leftRotated);
}

rotLeft();

?>