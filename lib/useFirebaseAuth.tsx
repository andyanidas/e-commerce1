import { useState, useEffect } from 'react'
import Firebase from '../Firebase';


interface user{
  uid:string,
  email:string
}
const formatAuthUser = (asd:user) => ({
  uid: asd.uid,
  email: asd.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<user>();
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState:any) => {
    if (!authState) {
      setAuthUser(undefined)
      setLoading(false)
      return;
    }

    setLoading(true)
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading
  };
}