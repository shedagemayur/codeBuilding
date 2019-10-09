importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var config = {
	apiKey: "YOUR_FIREBASE_API_KEY",
	authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
	databaseURL: "YOUR_FIREBASE_DATABASE_URL",
	projectId: "YOUR_FIREBASE_PROJECT_ID",
	storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
	messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID"
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