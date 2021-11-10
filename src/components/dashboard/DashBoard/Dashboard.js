import React from 'react';
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

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user, logOut} = useAuth();
    return (
        <div className="container">
            <div className="row">
                <h2 className="py-2 mt-3 mt-lg-5 display-3 bg-light-pink text-center mb-4">DashBoard</h2>
                
                <div className="col-sm-12 col-lg-2 ps-lg-0">
                    <h5 className="d-none d-lg-block card-header text-center display-4 bg-light-pink fixed">Menu</h5>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="w-100">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                <ul className="navbar-nav d-flex flex-column w-100 dashboard-menu">
                                    <li className="nav-item">
                                        <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to={`${url}/pay`}>Pay</NavLink>
                                    </li>
                                    <li className="nav-item border-bottom">
                                        <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark" to={`${url}/my-orders`}>My Orders</NavLink>
                                    </li>
                                   <li className="nav-item">
                                    <NavLink activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to={`${url}/manage-all-order`}>Manage All Orders</NavLink>
                                    </li>
                                
                                    <li className="nav-item">
                                    <NavLink  activeStyle={{background: "#f5cfd7"}} className="nav-link text-dark border-bottom" to={`${url}/add-service`}>Add Service</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
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
                        <Route path={`${path}/manage-all-order`}>
                            <AllOrders></AllOrders>
                        </Route>
                        <Route path={`${path}/add-service`}>
                            <AddService></AddService>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
