import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {... rest}
        render={
            props => props.isAuth ?
            <Component {...props} /> :
            <Redirect to="/account" />
        }
    />
);

const mapStateToProps = state => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps)(PrivateRoute);