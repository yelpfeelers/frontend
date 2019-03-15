import React, { Component } from "react";
import axios from "axios";

axios.interceptors.request.use(
  function (options) {
    options.headers.authorization = localStorage.getItem("token");

    return options;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const privateRoute = Component => {
  return class Authenticated extends Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h1>Please login to bookmark</h1>;
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
};

export default privateRoute;