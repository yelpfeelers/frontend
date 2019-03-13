import React from 'react';

const Star = props => (
    <div
        className={props.rating < props.star ? 'star-light' : 'star-solid'}
        onClick={() => props.enableRating(props.star)}
    ></div>
)

export default Star