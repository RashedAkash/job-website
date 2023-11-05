import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import { auth } from '../config/Firebase.config';


export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
const provider = new GoogleAuthProvider();

  //google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

//sign up email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

//login email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
//manage user
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);

        return () => {
          return subscribe()
        }
      }
    });
  }, []);

  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  
  const values = {
    signUp,
    logIn,
    googleSignIn,
    user,
    logOut,
    loading
  }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default Context;
