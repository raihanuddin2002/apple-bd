import { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Atuhentication/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    // State
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    // google sign In
    const signInWithGoogle = () => {
        setIsLoading(true);

       // console.log(redirect_url);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

          .finally( () => {
            setIsLoading(false);
          });
    }


    // Log Out 
    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            setUser('');
          }).catch((error) => {
            setError(error);
          })
          .finally( () => {
            setIsLoading(false);
          });
    }

    //Observer 
     useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              // ...
            } else {
              setError('');
            }
            setIsLoading(false);
          });
      },[]);

    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        isLoading
        
    }
       
};

export default useFirebase;

