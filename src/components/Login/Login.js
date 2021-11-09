import React, { useState } from 'react';
import {useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [error,setError] = useState('');

    const {signInWithGoogle} = useAuth();


    // History & location
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from.pathname || "/home";


    /*===================================
     *          Login System
     *===================================*/
    // Google Login
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
                 history.push(redirect_url);
  
            }).catch((error) => {
                setError(error.message);
                // ...
            })
    }
    
    return (
        <div className="bg-dark py-5">
            <div className="container text-start p-5 bg-white my-5">
                <div className="row row-cols-2">
                    <div className="col">
                        <h3 className="text-center d-none d-md-block mb-5">Get Started</h3>
                        <div className="text-center">
                            <button  onClick={handleGoogleSignIn} className="btn btn-danger w-100 me-2 mb-3">Google</button>
                            <button className="btn btn-dark w-100 me-2" >Github</button>
                        </div>
                        <h5 className="text-danger">{error}</h5>
                    </div>
                    <div className="col">
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src="https://i.ibb.co/p0xF8fc/online-registration-sign-up-concept-flat-vector-illustration-young-male-cartoon-character-sitting-hu.jpg" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;