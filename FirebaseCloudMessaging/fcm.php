<?php

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

<script src="https://www.gstatic.com/firebasejs/4.10.0/firebase.js"></script>
<link rel="stylesheet" type="text/css" href="manifest.json">
<script>
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyCEzhJUx1ot75fAAe9Ww2yOskVSgdtTWd8",
		authDomain: "cometchat-6f734.firebaseapp.com",
		databaseURL: "https://cometchat-6f734.firebaseio.com",
		projectId: "cometchat-6f734",
		storageBucket: "cometchat-6f734.appspot.com",
		messagingSenderId: "68798032406"
	};
	firebase.initializeApp(config);

	const messaging = firebase.messaging();

	messaging.requestPermission()
	.then(function() {
		console.log('Notification permission granted.');
		/*if(isTokenSentToServer){
			console.log('Token already saved.')
		}else{
			getfbToken();
		}*/
		getfbToken();
	})
	.catch(function(err) {
		console.log('Unable to get permission to notify.', err);
	});

	var getfbToken = function(){
		// Get Instance ID token. Initially this makes a network call, once retrieved
  		// subsequent calls to getToken will return from cache.
	  messaging.getToken()
	  .then(function(currentToken) {
	  	if (currentToken) {
	  		console.log('currentToken: ', currentToken)
	  		sendTokenToServer(currentToken);
	  		//updateUIForPushEnabled(currentToken);
	  	} else {
			console.log('No Instance ID token available. Request permission to generate one.');
			// Show permission UI.
			//updateUIForPushPermissionRequired();
			setTokenSentToServer(false);
		}
	})
	  .catch(function(err) {
		console.log('An error occurred while retrieving token. ', err);
		showToken('Error retrieving Instance ID token. ', err);
		setTokenSentToServer(false);
	  });
	}

	// Callback fired if Instance ID token is updated.
	messaging.onTokenRefresh(function() {
		messaging.getToken()
		.then(function(refreshedToken) {
			console.log('Token refreshed.');
			// Indicate that the new Instance ID token has not yet been sent to the
			// app server.
			setTokenSentToServer(false);
			// Send Instance ID token to app server.
			sendTokenToServer(refreshedToken);
		})
		.catch(function(err) {
			console.log('Unable to retrieve refreshed token ', err);
			showToken('Unable to retrieve refreshed token ', err);
		});
	});

	var sendTokenToServer = function(currentToken) {
		if (!isTokenSentToServer()) {
			console.log('Sending token to server...');
			setTokenSentToServer(true);
		} else {
			console.log('Token already sent to server so won\'t send it again ' +
				'unless it changes');
		}
	}

	var isTokenSentToServer = function() {
		return window.localStorage.getItem('sentToServer') == 1;
	}
	var setTokenSentToServer = function(sent) {
		window.localStorage.setItem('sentToServer', sent ? 1 : 0);
	}
	messaging.onMessage(function(payload) {
		console.log("Message received. ", payload);
	});
</script>

</body>
</html>