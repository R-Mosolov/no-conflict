// This module keeps parameters for connecting to DBSM (Google Firebase)

const firebase = require('firebase');
require('firebase/firestore'); // Required for side-effects

// Initialize Cloud Firestore through Firebase
function db() {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: 'no-conflict',
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  });
}

module.exports = db;
