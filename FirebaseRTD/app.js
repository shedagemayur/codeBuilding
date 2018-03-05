(function(){
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

	// Get elements
	const userInfo = document.getElementById('userinfo');

	// Create database reference
	const dbRef = firebase.database().ref().child('userinfo');

	// Sync firebase object changes
	dbRef.on('value', snapshot => {
		userInfo.innerText = JSON.stringify(snapshot.val(), null, 3);
	});

	// Set value to database
	userid = 11;
	const random = document.getElementById('random');
	if(random){
		random.addEventListener('click', function(){
			userid = Math.floor(Math.random(10, 99)*100);
			dbRef.set({
				location: 'India',
				userid: userid,
				username: 'Qwerty'
			});
		});
	}
}());