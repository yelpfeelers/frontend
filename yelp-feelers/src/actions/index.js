import axios from 'axios';
import axiosWithAuth from '../auth';

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

export const bookmarkBusiness = (business, rating) => dispatch => {
    // let payload = {
    //     business_id: business.id,
    //     alias: business.alias,
    //     image_url: business.image_url,
    //     is_closed: business.is_closed,
    //     categories: 'tacos',
    //     rating: business.rating,
    //     latitude: business.coordinates.latitude,
    //     longitude: business.coordinates.longitude,
    //     transactions: 'n/a',
    //     price: '$',
    //     display_phone: business.display_phone,
    //     location: Object.values(business.location).filter(x => x.length > 0).join(', '),
    //     my_rating: rating
    // }
    // dispatch({ type: POST_BOOKMARK_REQUEST })
    

    // axiosWithAuth()
    //     .post('https://yelpfeelers.herokuapp.com/api/bookmarks', payload)
    //     .then(res => {
    //         console.log(res);
    //         // dispatch({ type: POST_BOOKMARK_SUCCESS })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         // dispatch({ type: POST_BOOKMARK_FAILURE })
    //     })

    // console.log(business)

    axios.post(
      "https://yelpfeelers.herokuapp.com/api/bookmarks",
      {
        business_id: business.id,
        alias: business.alias,
        image_url: business.image_url,
        is_closed: business.is_closed,
        categories: 'tacos',
        rating: business.rating,
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
        transactions: 'n/a',
        price: '$',
        display_phone: business.display_phone,
        location: Object.values(business.location).filter(x => x.length > 0).join(', '),
        my_rating: rating
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            window.localStorage.token
        }
      }
    )
    .then(res => console.log(res));
}

export const removeBookmark = id => dispatch => {
    axiosWithAuth()
        .delete(`https://yelpfeelers.herokuapp.com/api/bookmarks/${id}`)
        .then(res => {
            console.log(res);
            // dispatch({ type: POST_BOOKMARK_SUCCESS })
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_BOOKMARK_FAILURE })
        })
}

export const updateReview = (business, rating) => dispatch => {
    axios.update(
      `https://yelpfeelers.herokuapp.com/api/bookmarks/${business.id}`,
      {
        business_id: business.id,
        alias: business.alias,
        image_url: business.image_url,
        is_closed: business.is_closed,
        categories: 'tacos',
        rating: business.rating,
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
        transactions: 'n/a',
        price: '$',
        display_phone: business.display_phone,
        location: Object.values(business.location).filter(x => x.length > 0).join(', '),
        my_rating: rating
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            window.localStorage.token
        }
      }
    )
    .then(res => console.log(res));
}

export const fetchBookmarks = () => dispatch => {
    console.log('fetch action')
    // dispatch({ type: GET_BOOKMARK_REQUEST })
    axiosWithAuth()
        .get('https://yelpfeelers.herokuapp.com/api/bookmarks')
        .then(res => {
            console.log(res);
            // dispatch({ type: POST_BOOKMARK_SUCCESS })
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_BOOKMARK_FAILURE })
        })
}

export const fetchReviews = id => dispatch => {
    dispatch({ type: GET_REVIEWS_REQUEST });
    return axios
        .get(`https://yelpfeelers.herokuapp.com/api/yelp/reviews/${id}`)
        .then(res => {
            // console.log(res);
            dispatch({ type: GET_REVIEWS_SUCCESS });
            return res
        })
        .catch(err => {
            // console.log(err);
            dispatch({ type: GET_REVIEWS_FAILURE, payload: err.message });
        })
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
    console.log('login', creds)
    dispatch({ type: POST_LOGIN_REQUEST });
    axios
        .post('https://yelpfeelers.herokuapp.com/api/users/login', creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token)
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
            localStorage.setItem('token', res.data.token) // <------- !!!! Get 
            // dispatch({ type: POST_SIGNUP_SUCCESS });
        })
        .catch(err => {
            console.log(err);
            // dispatch({ type: POST_SIGNUP_FAILURE });
        })
}