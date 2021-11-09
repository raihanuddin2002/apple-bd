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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold text-uppercase text-dark">
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
                         <Link className="nav-link text-dark" to="/add-service">Add Service</Link>
                        </li>}
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center fw-bold">
                        {!user && <li className="nav-item text-uppercase">
                            <Link className="nav-link ms-4 fs-5 btn btn-warning px-4" to="/login">Log in</Link>
                        </li>}
                        {user && <li className="nav-item text-uppercase" onClick={logOut}>
                            <Link className="nav-link text-dark me-4 fs-5 btn btn-warning px-4" to="/login">Log out</Link>
                        </li>}
                        {user && <li className="nav-item text-uppercase">
                            <h3 className="nav-link text-dark fs-5">{user?.displayName}</h3>
                        </li>}

                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;