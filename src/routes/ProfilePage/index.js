import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {
    
    return (
        <Route
            {...rest }
            render={props => {
                return localStorage.getItem("isAuthenticated") === "1" 
                ? <Component {...props} /> 
                : <Redirect to='/home' />
            }}
        />
    )
}

export default PrivateRoute
