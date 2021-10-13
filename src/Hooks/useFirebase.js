import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Login/Firebase/firebaseInitialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

firebaseInitialize();

export default function useFirebase() {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google Signin method

  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUsers(result.user);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // User Logout

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // User state tracking

  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
    });
    setIsLoading(false);
    return () => unsubscribed;
  }, []);

  return { users, error, logout, googleSignIn, isLoading };
}
