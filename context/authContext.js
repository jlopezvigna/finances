import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).catch((err) => console.log('Err: ', err));
  };

  const logout = async () => {
    await signOut(auth);
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => {
    return !!user?.uid;
  };

  const value = {
    register,
    login,
    logout,
    loginWithGoogle,
    user,
    isUserAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useAuthContext() {
  return React.useContext(AuthContext);
}
