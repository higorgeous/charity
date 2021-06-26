import firebaseClient from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env['FIREBASE_API_KEY'],
  authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['FIREBASE_PROJECT_ID'],
  storageBucket: process.env['FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['FIREBASE_APP_ID'],
  measurementId: process.env['FIREBASE_MEASUREMENT_ID'],
};

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient.firestore();
  firebaseClient.analytics();
  firebaseClient.performance();
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth?.Persistence?.LOCAL);
  (window as any).firebase = firebaseClient;
}

export default firebaseClient;
