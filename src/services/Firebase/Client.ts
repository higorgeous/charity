import firebaseClient from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/performance';

import isClientSide from '@utils/isClientSide';

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient.firestore();
  firebaseClient.storage();
  firebaseClient.auth();
  if (isClientSide) {
    firebaseClient.analytics();
    firebaseClient.performance();
    (window as any).firebase = firebaseClient;
  }
}

export default firebaseClient;
