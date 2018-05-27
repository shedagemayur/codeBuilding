<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<script type="text/javascript">
	window.onload = function(){
		var callbackMethod = 'callback_' + new Date().getTime();

		window[callbackMethod] = function(data){
			console.log(data);
		}

		var script = document.createElement('script');
		script.src = 'https://jsonplaceholder.typicode.com/users/1?callback='+callbackMethod;
		//script.src = 'https://mayur.chatforyoursite.com/JavaScriptCode/jsonp/callbackjson.php?callback='+callbackMethod;
		document.body.appendChild(script);
	}
</script>

</body>
</html>