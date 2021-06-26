import firebaseClient from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';

import isClientSide from '@utils/isClientSide';

const firebaseConfig = {
  apiKey: 'AIzaSyAK7rB52alTSXVvszSitgGd0-l2ya9QApo',
  authDomain: 'charitygorgeoustoken.firebaseapp.com',
  projectId: 'charitygorgeoustoken',
  storageBucket: 'charitygorgeoustoken.appspot.com',
  messagingSenderId: '476866223714',
  appId: '1:476866223714:web:6a66b44e74ed0fde9b7b3b',
  measurementId: 'G-EMKER1YVPP',
};

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient.firestore();
  firebaseClient.performance();
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth?.Persistence?.LOCAL);
  (window as any).firebase = firebaseClient;
}

export default firebaseClient;
