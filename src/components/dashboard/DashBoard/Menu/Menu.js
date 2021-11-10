import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Menu = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="w-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav d-flex flex-column w-100 dashboard-menu">
                            {user && <li className="nav-item">
                                    <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to="/pay">Pay</NavLink>
                                </li>}
                            {user && <li className="nav-item border-bottom">
                                <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark" to="/my-orders">My Orders</NavLink>
                            </li>}
                            {user && <li className="nav-item">
                            <NavLink activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to="/manage-all-order">Manage All Orders</NavLink>
                            </li>}
                        
                            {user && <li className="nav-item">
                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to="/add-service">Add Service</NavLink>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menu;