<?php

$response = array();

if (!empty($_REQUEST)) {
	$response['success'] = 1;
	$response['data'] = $_REQUEST;
	echo json_encode($response);
	exit();
}else{
	$response['success'] = 0;
	$response['message'] = 'Empty request.';
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>JavaScript</title>
</head>
<body>
	<button id="cc_install">Test</button>
</body>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(event) {

		let queryString = (obj) => {
			return Object.keys(obj).reduce(
				function(a,k){
					a.push(k+'='+encodeURIComponent(obj[k]));
					return a
				},[]).join('&');
		};

		let cc_display = (id, value) => {
			if(typeof(id) === undefined || id == ''){
				return;
			}
			document.getElementById(id).style.display = value;
		};

	let cc_fadeOut = (id, callback) => {
		if(typeof(id) === undefined || id == ''){
			return;
		}
		var element = document.getElementById(id);
	    var opacity = 1;
	    var callback = callback || function(){};
	    var timer = setInterval(function () {
	        if (opacity <= 0.1){
	            clearInterval(timer);
	            element.style.display = 'none';
	        }
	        element.style.opacity = opacity;
	        element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
	        opacity -= opacity * 0.1;
	    }, 10);
	    if(callback){
	    	callback();
	    }
	};

	let cc_fadeIn = (id, callback) => {
		if(typeof(id) === undefined || id == ''){
			return;
		}
		var element = document.getElementById(id);
		var opacity = 0.1;
		var callback = callback || function(){};
		element.style.display = 'block';
		var timer = setInterval(function () {
			if (opacity >= 1){
				clearInterval(timer);
			}
			element.style.opacity = opacity;
			element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
			opacity += opacity * 0.1;
		}, 20);
		if(callback){
	    	callback();
	    }
	};

		let cc_addEventLicener = (id, event, callback) => {
			if(typeof(id) === undefined || id == ''){
				return;
			}
			var event = event || 'click';
			var callback = callback || function(){};
			var checkidindom = document.getElementById(id);

			if(typeof(checkidindom) !== undefined && checkidindom !== null){
				checkidindom.addEventListener(event, callback);
			}
		};

		let js_Ajax = () => {
			let data = {
				id: 11,
			    name: 'Sara',
			    color: 'red'
			},
			ts = Math.floor(Date.now() / 1000);
			var request = new Request('sample.php?ts='+ts, {
				method: 'post',
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				body: queryString(data)
			});

			fetch(request).then(res => res.json()).then(
				function (data) {
					console.log('JSON response', data);
					if(typeof(data) !== undefined && data.hasOwnProperty('data') && data.data.hasOwnProperty('name')){
						console.log('name is ',data.data['name']);
					}
				}
			).catch(
				function (error) {
					console.log('Request failed', error);
				}
			);
		};

		cc_addEventLicener('cc_install', 'click', js_Ajax);
	});
</script>
</html>