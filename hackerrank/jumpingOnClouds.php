<?php

function jumpingOnClouds() {
	$n = 7;
	$arr = array(0, 0, 1, 0, 0, 1, 0);
	$count = -1;

	for ($i=0; $i < $n; $i++, $count++) {
		if($i < $n-2 && $arr[$i+2] == 0) {
			$i++;
		}
	}
	echo $count;
}

jumpingOnClouds()

?>