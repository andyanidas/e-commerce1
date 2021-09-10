import React, {useContext, useEffect, useState} from 'react';
import {auth,getAuths} from '../Firebase'
// import firebase from "firebase";
import firebase from "firebase/compat/app";
const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        // const auth = getAuth();
        const unsubscribe = getAuths.onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        });
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};