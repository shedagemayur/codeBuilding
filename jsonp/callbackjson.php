<?php

if(!empty($_REQUEST['callback'])){
	echo $_REQUEST['callback'].'('.json_encode(
		array(
			'id'=>1, 'name'=>'Leanne Graham', 'username'=> 'Bret', 'website'=>'hildegard.org'
		)
	).')';
}

?>