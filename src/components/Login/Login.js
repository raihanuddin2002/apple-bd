import React, { useState } from 'react';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const {signInWithGoogle,logInManually,isLoading} = useAuth();


    // History & location
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from.pathname || "/home";


    // get email
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    // get pass
    const getPass = (e) => {
        setPassword(e.target.value);
    }
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
    //manual login
    const handleManualLogin = (e) => {
        e.preventDefault();
        e.target.reset();

        logInManually(email,password)
            .then((result) => {
                history.push(redirect_url);
                console.log("Login Sucessfully");
                setError("");
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })

    }
    return (
        <div>
            <div className="container text-start py-5 bg-white">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col my-auto">
                    {isLoading && <div className="spinner-border text-pink  p-3 float-end" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        <h1 className="mb-5 text-pink">LOG IN</h1>
                        <form onSubmit={handleManualLogin} className="border-0">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                <input onBlur={getEmail} type="email" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                <input onBlur={getPass} type="password" className="form-control border-0 border-bottom border-2 border-dark" id="exampleInputPassword1"/>
                            </div>
                            <h6 className="text-danger">{error}</h6>
                            <button type="submit" className="btn bg-pink px-5 py-3 text-uppercase fs-5">Log in</button>
                            <div className="my-3 text-center">
                              <Link to="/signup"><span className="text-pink text-decoration-none">Create a new account?</span></Link>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <div className="d-none d-md-block">
                            <img className="img-fluid" src="https://i.ibb.co/cQJcWm8/gero-1.png" alt="" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-center d-none d-md-block mt-4">Get Started</h3>
                            <button  onClick={handleGoogleSignIn} className="btn btn-dark w-100 me-2">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;