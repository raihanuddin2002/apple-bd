import React from 'react';
import {
    Route,
    Redirect,
  } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const DashPrivateRoute = ({children, ...rest}) => {
    const {user,isLoading, thisUser} = useAuth();

    if(isLoading){
      return (
        <div className="text-center my-5">
           <div className="text-center">
            <div className="spinner-border text-pink  p-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
           </div>
        </div>
      )
    }
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
          thisUser?.role === "admin" ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location }
              }}
              
            />
          )
        }
      />     
    );
};

export default DashPrivateRoute;