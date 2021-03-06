import { useEffect } from 'react';
import { GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import axios from 'axios';
import initializeAuthentication from "../Atuhentication/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    // State
    const [user,setUser] = useState('');
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState('');

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

    const signUpManually = (email,password) => {
      setIsLoading(true);
      // Manual signup
      return createUserWithEmailAndPassword(auth, email, password)
                .finally( () => {
                  setIsLoading(false);
                }) 
    }

    // Log in manually
    const logInManually = (email,password) => {
      setIsLoading(true);
      // Manual Login
      return signInWithEmailAndPassword(auth, email, password)
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

      // Load admin User
      useEffect( () => {
        axios.post(`https://secret-tor-67063.herokuapp.com/users/${user.email}`)
            .then(res => {
                if(res){
                  setAdmin(res.data);
                }
            });
      },[user]);
    return {
        user,
        error,
        admin,
        signInWithGoogle,
        signUpManually,
        logInManually,
        logOut,
        isLoading
        
    }
       
};

export default useFirebase;

