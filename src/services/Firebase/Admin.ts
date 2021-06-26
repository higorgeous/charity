import * as firebaseAdmin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const projectId = process.env.FIREBASE_PROJECT_ID;

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`,
  );
}
if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        privateKey: privateKey,
        clientEmail,
        projectId,
      }),
      databaseURL: `https://${projectId}.firebaseio.com`,
    });
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default firebaseAdmin;
