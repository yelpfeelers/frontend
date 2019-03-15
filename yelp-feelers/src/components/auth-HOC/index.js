import React from "react";
import Restricted from '../Restricted/Restricted';

// const privateRoute = Component => {
//   return class Authenticated extends Component {
//     render() {
//       const token = localStorage.getItem("token");
//       const notLoggedIn = <h1>Please login to bookmark</h1>;
//       return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
//     }
//   };
// };

const privateRoute = Component => {
  return class Authenticated extends Component {
    render() {
      return localStorage.getItem("token") ?
      <Component {...this.props} /> :
      <Restricted />
    }
  };
};

export default privateRoute;