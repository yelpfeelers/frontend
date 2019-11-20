import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Account from './views/Account/Account';
import Bookmarks from './views/Bookmarks/Bookmarks';
import Business from './views/Business/Business';
import Results from './views/Results/Results';
import Search from './views/Search/Search';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Search} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/results" component={Results} />
        <Route path="/business/:businessId" component={Business} />
        <Route path="/account" component={Account} />
      </>
    );
  }
}

export default App;
