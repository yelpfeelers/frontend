import {
    GET_LOCATION_FAILURE,
    GET_LOCATION_REQUEST,
    GET_LOCATION_SUCCESS,
    POST_LOGIN_FAILURE,
    POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_SIGNUP_FAILURE,
    POST_SIGNUP_REQUEST,
    POST_SIGNUP_SUCCESS
} from '../actions';

const initialState = {
    businesses: [
        {
            alias: "la-taqueria-san-francisco-2",
            coordinates: {latitude: 37.75088, longitude: -122.41805},
            display_phone: "(415) 285-7117",
            distance: 1958.2373900144175,
            id: "JARsJVKLPgs_yC3cwDnp7g",
            image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/quJVkgOw_pf70_enWelldw/o.jpg",
            is_closed: false,
            location: {address1: "2889 Mission St", address2: "", address3: "", city: "San Francisco", zip_code: "94110" },
            name: "La Taqueria",
            phone: "+14152857117",
            price: "$",
            rating: 4,
            review_count: 3766,
            transactions: [],
            url: "https://www.yelp.com/biz/la-taqueria-san-francisco-2?adjust_creative=K_LEoK1MMSLkCWW3JVcg8w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=K_LEoK1MMSLkCWW3JVcg8w"
        }
    ],
    error: null,
    isAuth: false,
    loggingIn: false,
    searchingLocation: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOCATION_FAILURE:
            return {
                ...state, error: action.payload, searchingLocation: false
            }
        case GET_LOCATION_REQUEST:
            return {
                ...state, error: null, searchingLocation: true
            }
        case GET_LOCATION_SUCCESS:
            return {
                ...state, businesses: action.payload, error: null, searchingLocation: false
            }
        case POST_LOGIN_FAILURE:
            return state;
        case POST_LOGIN_REQUEST:
            return state;
        case POST_LOGIN_SUCCESS:
            return state;
        case POST_SIGNUP_FAILURE:
            return state;
        case POST_SIGNUP_REQUEST:
            return state;
        case POST_SIGNUP_SUCCESS:
            return state;
        default:
            return state
    }
}