<?php

function sockMerchant() {
	$n = 9;
	$ar = array(1, 1, 3, 1, 2, 1, 3, 3, 3, 3);
	$count = 0;

	$countDuplicates = array_count_values($ar);

	foreach ($countDuplicates as $key => $value) {
		if($value >= 2) {
			$count = $count + intval($value/2);
		}
	}

	echo $count;
}

sockMerchant()

?>