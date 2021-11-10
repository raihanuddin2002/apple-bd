import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();

    if(isLoading){
      return (
        <div className="text-center my-5">
           <div class="spinner-border text-danger  p-3 float-end" role="status">
              <span class="visually-hidden">Loading...</span>
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