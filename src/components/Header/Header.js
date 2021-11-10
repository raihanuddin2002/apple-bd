import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // const allContext= useContext(AuthContext);
    // const {user,logOut} = allContext;
    const {user, logOut} = useAuth();
    return (
        <div className="sticky-top bg-white">
            <nav className="navbar navbar-expand-xl navbar-light">
                <div className="container">
                    <span className="navbar-brand fs-1 fw-bold ff-volkhob">Apple BD</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold">
                    <li className="nav-item">
                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark" aria-current="page" to="/products">Products</NavLink>
                        </li>
                        
                        {user && <li className="nav-item">
                         <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark me-4" to="/dashboard">Dashboard</NavLink>
                        </li>}
                        {!user && <li className="nav-item text-uppercase">
                            <NavLink className="nav-link me-4 px-5 btn bg-pink ms-3" to="/login">Log in</NavLink>
                        </li>}
                        {user && <li className="nav-item text-uppercase" onClick={logOut}>
                            <NavLink className="nav-link me-3 btn bg-pink px-4" to="/login">Log out</NavLink>
                        </li>}
                        {user && <li className="nav-item text-uppercase">
                            <h6 className="nav-link text-dark mt-2">{user?.displayName}</h6>
                        </li>}

                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;