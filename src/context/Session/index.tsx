import { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';

import firebaseClient from '@services/Firebase/Client';
import isClientSide from '@utils/isClientSide';

export const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<firebaseClient.User | null>(null);

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

  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
