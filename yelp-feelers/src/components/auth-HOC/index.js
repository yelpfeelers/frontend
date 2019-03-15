import React from "react";

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