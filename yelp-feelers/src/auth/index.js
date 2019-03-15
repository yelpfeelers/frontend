import axios from 'axios';

// axios.interceptors.request.use(
//   function (options) {
//     options.headers.authorization = localStorage.getItem("token");

//     return options;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );


export default () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}