import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Account from './views/Account/Account';
import Bookmarks from './views/Bookmarks/Bookmarks';
import Business from './views/Business/Business';
import Businesses from './views/Businesses/Businesses';
import Search from './views/Search/Search';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Search} />
        <PrivateRoute path="/bookmarks" component={Bookmarks} />
        <Route exact path="/businesses" component={Businesses} />
        <Route path="/businesses/:businessId" component={Business} />
        <Route path="/account" component={Account} />
      </>
    );
  }
}

export default App;
