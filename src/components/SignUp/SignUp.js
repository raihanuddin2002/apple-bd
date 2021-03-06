import {getAuth, updateProfile  } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const [signUpMessage, setSignUpMessage] = useState(''); // success signup message
    
    const {signInWithGoogle,signUpManually,isLoading} = useAuth();
    const auth =getAuth();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then( async(result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                saveUserGoogle(name,email);
                setSignUpMessage("Sign Up Successful :)")

            }).catch((error) => {
                setError(error.message);
                // ...
            })
        setSignUpMessage("");
    }
    // Saved google user
    const saveUserGoogle = (name,email) => {
        const saveUserInfo ={
            name: name, email: email, password: ""
        }
        axios.put('https://secret-tor-67063.herokuapp.com/saveUserInfo',{saveUserInfo})
            .then(res => console.log("Google User inserted sucessfully done"))
    }

    // get name
    const getName = (e) => {
        setName(e.target.value);
    }
    // get email
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    // get pass
    const getPass = (e) => {
        setPassword(e.target.value);
    }
    // get confirm
    const getConfirmPass = (e) => {
       const confirmPass =  e.target.value;
       setConfirmPassword(confirmPass);
    }
    
    /*===========================
     *  Manual registration 
     *==========================*/
    const handleRegistration = (e) => {
        e.preventDefault();

        // Password & confirm password match
        if(password !== confirmPassword){
            return setError("Password not matched!!");
        }else{
            setError('');
        }

        // Save user info
            const saveUserInfo ={
                displayName: name,
                email: email,
                password: password || ""
            }
        // Manual create account
            signUpManually(email,password)
                .then((result) => {
                    updateProfile(auth.currentUser, {
                    displayName: name})
                    .then(() => {
                        setSignUpMessage("Successful :)");
                        e.target.reset();
                        saveUser();
                    })
                    .catch((error) => {
                        console.log("manual error")
                        setError(error.message);
                    });
                   
                })
                .catch((error) => {
                    setError(error.message);
                });

            const saveUser = () => {
                axios.post('https://secret-tor-67063.herokuapp.com/saveUserInfo',{saveUserInfo})
                    .then(res => {
                        console.log("User inserted sucessfully done");
                        window.location.reload();
                    })
                
            }   
    }
   
    return (
        <div>
            <div className="container text-start py-5 bg-white">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col my-auto">
                        {signUpMessage && <h6 className="text-success text-end fs-5" role="alert">{signUpMessage}</h6>}
                        {isLoading && <div className="spinner-border text-pink  p-3 float-end" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        <h1 className="mb-5 text-pink">SIGN UP</h1>
                        <form onSubmit={handleRegistration} className="border-0">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                <input onBlur={getName} type="text" className="form-control rounded-0 border-0 border-bottom border-2 border-dark" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control rounded-0  border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input onBlur={getPass} type="password" className="form-control rounded-0  border-0 border-bottom border-2 border-dark" id="exampleInputPassword1" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Confirm Password</label>
                                <input onBlur={getConfirmPass} type="password" className="form-control rounded-0  border-0 border-bottom border-2 border-dark" id="exampleInputPassword1" required/>
                            </div>
                            <h6 className="mb-3 text-danger">{error}</h6>
                            <button type="submit" className="btn bg-pink px-5 py-3 text-uppercase">Sign Up</button>
                            <div className="my-3 text-center">
                              <Link to="/login"><span className="text-pink">Already has an account?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <div className="d-none d-md-block text-center">
                            <img className="img-fluid mx-auto" src="https://i.ibb.co/4d0hycb/Apple-iphone13-hero-09142021-inline-jpg-large-removebg-preview.png" alt="" />
                        </div>
                       
                        <div className="text-center">
                            <h3 className="text-center d-none d-md-block mt-4">Get Started</h3>
                            <button onClick={handleGoogleSignIn} className="btn btn-dark w-100 me-2">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;