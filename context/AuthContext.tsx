import React, { useState, useEffect, useContext, createContext } from "react";
import nookies from "nookies";
import { getAuth } from "firebase/auth";
import {getApps, initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMAPXQR7Hdw3Ooy_HxbAIxdbGPnkC1w7w",
    authDomain: "auth-developer-66d68.firebaseapp.com",
    projectId: "auth-developer-66d68",
    storageBucket: "auth-developer-66d68.appspot.com",
    // databaseURL:"https://auth-developer-66d68-default-rtdb.firebaseio.com/",
    messagingSenderId: "920196545382",
    appId: "1:920196545382:web:074656a3ce914f6e7966a7"
};

let firebaseApp :any;

try{
    firebaseApp = initializeApp(firebaseConfig)
}catch (e){
    firebaseApp = getApps()
}
// export {};
const auth = getAuth();


const AuthContext = createContext<{ user: any | null }>({
    user: null,
});

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState< any| null>(null);

    useEffect(() => {
        setUser(auth.currentUser);
        if (typeof window !== "undefined") {
            (window as any).nookies = nookies;
        }
        return auth.onIdTokenChanged(async (user) => {
            console.log(`token changed!`);
            if (!user) {
                console.log(`no token found...`);
                setUser(null);
                nookies.destroy(null, "token");
                nookies.set(null, "token", "", {path: '/'});
                return;
            }

            console.log(`updating token...`);
            const token = await user.getIdToken();
            setUser(user);
            nookies.destroy(null, "token");
            nookies.set(null, "token", token, {path: '/'});
        });
    }, []);

    // force refresh the token every 10 minutes
    useEffect(() => {
        const handle = setInterval(async () => {
            console.log(`refreshing token...`);
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000);
        return () => clearInterval(handle);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}
const db =  getFirestore(firebaseApp)
export {db}
export const useAuth = () => {
    return useContext(AuthContext);
};
