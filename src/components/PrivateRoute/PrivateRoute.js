import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();

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
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
              
            />
          )
        }
      />     
    );
};

export default PrivateRoute;