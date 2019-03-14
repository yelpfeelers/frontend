import React from "react";

const PrivateRoute = Component => {
  return class Authenticated extends Component {
    render() {
      return (
        localStorage.getItem("token") ?
        <h1>Please login to bookmark</h1> :
        <Component {...this.props} />
      )
    }
  };
};

export default PrivateRoute;
