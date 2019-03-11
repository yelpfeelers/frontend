const initialState = {
    businesses: [
        {
            name: 'Taco Business 1',
            address: 'Business Address',
            reviews: '5 Stars'
        },
        {
            name: 'Taco Business 2',
            address: 'Business Address',
            reviews: '5 Stars'
        },
        {
            name: 'Taco Business 3',
            address: 'Business Address',
            reviews: '5 Stars'
        },
        {
            name: 'Taco Business 4',
            address: 'Business Address',
            reviews: '5 Stars'
        },
        {
            name: 'Taco Business 5',
            address: 'Business Address',
            reviews: '5 Stars'
        },
        {
            name: 'Taco Business 6',
            address: 'Business Address',
            reviews: '5 Stars'
        }
    ],
    isAuth: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}