import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" aria-current="page" to="/about">About</Link>
                        </li>
                        {user && <li className="nav-item">
                         <Link className="nav-link text-dark" to="/my-orders">My Orders</Link>
                        </li>}
                        {user && <li className="nav-item">
                         <Link className="nav-link text-dark" to="/manage-all-order">Manage All Orders</Link>
                        </li>}
                        {user && <li className="nav-item">
                         <Link className="nav-link text-dark me-4" to="/add-service">Add Service</Link>
                        </li>}
                        {!user && <li className="nav-item text-uppercase">
                            <Link className="nav-link me-4 px-5 btn bg-pink" to="/login">Log in</Link>
                        </li>}
                        {user && <li className="nav-item text-uppercase" onClick={logOut}>
                            <Link className="nav-link me-3 btn bg-pink px-4" to="/login">Log out</Link>
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