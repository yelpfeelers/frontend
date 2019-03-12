import axios from 'axios';

export const POST_LOCATION_FAILURE = 'POST_LOCATION_FAILURE';
export const POST_LOCATION_REQUEST = 'POST_LOCATION_REQUEST';
export const POST_LOCATION_SUCCESS = 'POST_LOCATION_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';
export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';
export const POST_SIGNUP_REQUEST = 'POST_SIGNUP_REQUEST';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';

export const locationSearch = location => dispatch => {
    dispatch({ type: POST_LOCATION_REQUEST });
    return axios
            .get(`https://yelpfeelers.herokuapp.com/api/yelp?location=${location}&term=taco`)
            .then(res => {
                console.log(res)
                dispatch({ type: POST_LOCATION_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: POST_LOCATION_FAILURE, payload: err.message });
            });
}

export const loginUser = creds => dispatch => {
    console.log('login', creds)
    dispatch({ type: POST_LOGIN_REQUEST });
    axios
        .post('https://yelpfeelers.herokuapp.com/api/users/login', creds)
        .then(res => {
            console.log(res);
            // dispatch({ type: POST_LOGIN_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_LOGIN_FAILURE });
        })
}

export const signupUser = creds => dispatch => {
    console.log('signup', creds);
    dispatch({ type: POST_SIGNUP_REQUEST });
    axios
        .post('https://yelpfeelers.herokuapp.com/api/users/register', creds)
        .then(res => {
            console.log(res);
            // dispatch({ type: POST_SIGNUP_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_SIGNUP_FAILURE });
        })
}