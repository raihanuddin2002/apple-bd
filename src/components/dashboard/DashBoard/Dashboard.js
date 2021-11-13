import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AllOrders from '../AllOrders/AllOrders';
import AddService from '../AddService/AddService';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import DashPrivateRoute from './DashPrivateRoute/DashPrivateRoute';
import Review from '../Review/Review';
import NotFound from '../../NotFound/NotFound';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {logOut, admin} = useAuth();
    
    return (
        <div>
            <h2 className="d-none d-lg-block py-2 display-3 bg-light-pink text-center mb-4">DashBoard</h2>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-2 ps-lg-0">
                    <div className="position-sticky top-0">
                        <h3 className="d-none d-lg-block card-header text-center bg-light-pink py-4">Menu</h3>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="w-100">
                            <div className="row align-items-center py-3 d-lg-none px-3">
                                <div className="col-6 d-lg-none">
                                    <h2 className="display-3">DashBoard</h2>
                                </div>

                                <div className="col-6  text-end">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                    <ul className="navbar-nav d-flex flex-column w-100 dashboard-menu">
                                        <li className="nav-item">
                                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to="/home">Back to Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/pay`}>Pay</NavLink>
                                        </li>
                                        <li className="nav-item border-bottom">
                                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark px-4" to={`${url}/my-orders`}>My Orders</NavLink>
                                        </li>
                                        <li className="nav-item border-bottom">
                                            <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/review`}>Review</NavLink>
                                        </li>
                                       {admin ? <li className="nav-item">
                                        <NavLink activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/manage-all-order`}>Manage All Orders</NavLink>
                                        </li> : ""}

                                        {admin ? <li className="nav-item">
                                        <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/add-service`}>Add Service</NavLink>
                                        </li> : ""}

                                        {admin ? <li className="nav-item">
                                        <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/manage-products`}>Manage Products</NavLink>
                                        </li> : ""}

                                        {admin ? <li className="nav-item">
                                        <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom px-4" to={`${url}/make-admin`}>Make Admin</NavLink>
                                        </li> : ""}

                                        <li className="nav-item text-uppercase" onClick={logOut}>
                                            <div className="nav-link bg-pink px-4">Log out</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-10 pe-lg-0 scroll-div">
                    <Switch>
                        <Route exact path={`${path}/`}>                     
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/my-orders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <DashPrivateRoute path={`${path}/manage-all-order`}>
                            <AllOrders></AllOrders>
                        </DashPrivateRoute>
                        <DashPrivateRoute path={`${path}/add-service`}>
                            <AddService></AddService>
                        </DashPrivateRoute>

                        <Route path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                        <DashPrivateRoute path={`${path}/manage-products`}>
                            <ManageProducts></ManageProducts>
                        </DashPrivateRoute>

                    </Switch>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;
