import { useState, useEffect, createContext } from 'react';
import nookies from 'nookies';

import firebaseClient from '@services/Firebase/Client';
import isClientSide from '@utils/isClientSide';
import { useCollection } from 'react-firebase-hooks/firestore';

export const AuthContext = createContext<{
  user: firebaseClient.User | null;
  userVotes: any;
  userSubmissions: any;
}>({
  user: null,
  userVotes: null,
  userSubmissions: null,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [userVotes, setUserVotes] = useState<any>(null);
  const [userSubmissions, setUserSubmissions] = useState<any>(null);

  useEffect(() => {
    if (isClientSide) {
      (window as any).nookies = nookies;
    }

    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        firebaseClient
          .auth()
          .signInAnonymously()
          .catch(function (error) {
            console.log('signInAnonymously', error);
          });
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });
  }, []);

  const [votes] = useCollection(
    firebaseClient
      .firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('votes')
      .orderBy('votedAt', 'desc'),
  );

  const [submissions] = useCollection(
    firebaseClient
      .firestore()
      .collection('users')
      .doc(user?.uid)
      .collection('charities')
      .orderBy('createdAt', 'desc'),
  );

  useEffect(() => {
    if (user) {
      setUserVotes(votes);
      setUserSubmissions(submissions);
    }
  }, [votes, submissions, user]);

  useEffect(() => {
    const handle = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, userVotes, userSubmissions }}>
      {children}
    </AuthContext.Provider>
  );
};
