importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

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

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]