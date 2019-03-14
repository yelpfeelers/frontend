import axios from 'axios';
import axiosWithAuth from '../auth';

export const DELETE_BOOKMARK_FAILURE = 'DELETE_BOOKMARK_FAILURE';
export const DELETE_BOOKMARK_REQUEST = 'DELETE_BOOKMARK_REQUEST';
export const DELETE_BOOKMARK_SUCCESS = 'DELETE_BOOKMARK_SUCCESS';
export const GET_BOOKMARK_FAILURE = 'GET_BOOKMARK_FAILURE';
export const GET_BOOKMARK_REQUEST = 'GET_BOOKMARK_REQUEST';
export const GET_BOOKMARK_SUCCESS = 'GET_BOOKMARK_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';
export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const POST_BOOKMARK_FAILURE = 'POST_BOOKMARK_FAILURE';
export const POST_BOOKMARK_REQUEST = 'POST_BOOKMARK_REQUEST';
export const POST_BOOKMARK_SUCCESS = 'POST_BOOKMARK_SUCCESS';
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE';
export const GET_REVIEWS_REQUEST = 'GET_REVIEWS_REQUEST';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';
export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE';
export const POST_SIGNUP_REQUEST = 'POST_SIGNUP_REQUEST';
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS';
export const UPDATE_BOOKMARKS_FAILURE = 'UPDATE_REVIEWS_FAILURE';
export const UPDATE_BOOKMARKS_REQUEST = 'UPDATE_REVIEWS_REQUEST';
export const UPDATE_BOOKMARKS_SUCCESS = 'UPDATE_REVIEWS_SUCCESS';

export const bookmarkBusiness = (business, rating) => dispatch => {
    let payload = {
        business_id: business.id,
        image_url: business.image_url,
        name: business.name,
        rating: rating,
    }

    dispatch({ type: POST_BOOKMARK_REQUEST })
    
    axiosWithAuth()
        .post('https://yelpfeelers.herokuapp.com/api/bookmarks', payload)
        .then(res => {
            dispatch({ type: POST_BOOKMARK_SUCCESS, payload: res.data.data[0].bookmark })
        })
        .catch(err => {
            dispatch({ type: POST_BOOKMARK_FAILURE, payload: err.message });
        })
}

export const deleteBookmark = id => dispatch => {
    dispatch({ type: DELETE_BOOKMARK_REQUEST });
    axiosWithAuth()
        .delete(`https://yelpfeelers.herokuapp.com/api/bookmarks/${id}`)
        .then(res => {
            dispatch({ type: DELETE_BOOKMARK_SUCCESS, payload: res.data.data[0].bookmark })
        })
        .catch(err => {
            dispatch({ type: DELETE_BOOKMARK_FAILURE, payload: err.message });
        })
}

export const updateBookmark = bm => dispatch => {
    console.log(bm, 'here')
    dispatch({ type: UPDATE_BOOKMARKS_REQUEST })
    axiosWithAuth()
        .put(`https://yelpfeelers.herokuapp.com/api/bookmarks/${bm.id}`, bm)
        .then(res => {
            dispatch({ type: UPDATE_BOOKMARKS_SUCCESS, payload: res.data.data[0].bookmark })
        })
        .catch(err => {
            dispatch({ type: UPDATE_BOOKMARKS_FAILURE})
        });
}

export const fetchBookmarks = () => dispatch => {
    dispatch({ type: GET_BOOKMARK_REQUEST })
    axiosWithAuth()
        .get('https://yelpfeelers.herokuapp.com/api/bookmarks')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_BOOKMARK_SUCCESS, payload: res.data.data[0].bookmark })
        })
        .catch(err => {
            dispatch({ type: GET_BOOKMARK_FAILURE, payload: err.message });
        })
}

export const fetchReviews = id => dispatch => {
    dispatch({ type: GET_REVIEWS_REQUEST });
    return
    // return axios
    //     .get(`https://api.mota-analytica.io/business/${id}`)
    //     .then(res =>  {
    //         dispatch({ type: GET_REVIEWS_SUCCESS });
    //         if (res.data.result) {
    //             return res.data.result
    //         } else {
    //             return [];
    //         }
    //     })
    //     .catch(err => {
    //         dispatch({ type: GET_REVIEWS_FAILURE, payload: err.message });
    //     });
}

export const locationSearch = location => dispatch => {
    dispatch({ type: GET_LOCATION_REQUEST });
    return axios
            .get(`https://yelpfeelers.herokuapp.com/api/yelp?location=${location}&term=taco`)
            .then(res => {
                dispatch({ type: GET_LOCATION_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: GET_LOCATION_FAILURE, payload: err.message });
            });
}

export const loginUser = creds => dispatch => {
    dispatch({ type: POST_LOGIN_REQUEST });
    return axios
        .post('https://yelpfeelers.herokuapp.com/api/users/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.user.username });
            return;
        })
        .catch(err => {
            dispatch({ type: POST_LOGIN_FAILURE, payload: err.message });
        })
}

export const signupUser = creds => dispatch => {
    dispatch({ type: POST_SIGNUP_REQUEST });
    return axios
        .post('https://yelpfeelers.herokuapp.com/api/users/register', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: POST_SIGNUP_SUCCESS, payload: res.data.user.username });
            return;
        })
        .catch(err => {
            dispatch({ type: POST_SIGNUP_FAILURE, payload: err.message });
        })
}