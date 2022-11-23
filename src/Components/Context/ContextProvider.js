import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const [user, setUser] = useState({});

  //create user
  const userRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  //user sign out
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    userLogin,
    userRegister,
    loginWithGoogle,
    userSignOut,
    user,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
