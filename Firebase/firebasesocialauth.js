// include firebase.js

var config = {
	apiKey: "YOUR_FIREBASE_API_KEY",
	authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
	databaseURL: "YOUR_FIREBASE_DATABASE_URL",
	projectId: "YOUR_FIREBASE_PROJECT_ID",
	storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
	messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID"
};
var javascriptsocialauth = firebase;
firebase.initializeApp(config);

function socialauth_login(params){
	if(typeof(params)== undefined || !params.hasOwnProperty('AuthProvider')){
		return;
	}

	if(['Facebook','Google','Twitter'].indexOf(params.AuthProvider)==-1){
		return;
	}
	var provider = new javascriptsocialauth.auth[params.AuthProvider+'AuthProvider']();

	if(params.AuthProvider == 'Facebook') {
		provider.addScope('email');
		provider.addScope('public_profile');
	}

	javascriptsocialauth.auth().signInWithPopup(provider).then(function(result) {
		// The signed-in user info.
		if(params.AuthProvider=='Twitter'){
			result.additionalUserInfo.profile.link =  'https://twitter.com/'+result.additionalUserInfo.username;
		}
		var identifier = result.additionalUserInfo.profile.id;
		if(params.AuthProvider=='Facebook' && result.additionalUserInfo.hasOwnProperty('profile') && result.additionalUserInfo.profile.hasOwnProperty('email') && result.additionalUserInfo.profile.email!=null){
			identifier =  result.additionalUserInfo.profile.email;
		}
		var social_details = {
			network_name: result.additionalUserInfo.providerId,
			identifier: identifier,
			firstName: result.user.displayName,
			profileURL: result.additionalUserInfo.profile.link||'',
			photoURL: result.user.photoURL||'',
			allowed: 1
		}
		console.log('Social Details',social_details);
	}).catch(function(error) {
		console.log('Error: ', error);
	});
}