import React from 'react';
import styled from 'styled-components';
import starLight from '../../assets/star-light.svg'
import starSolid from '../../assets/star-solid.svg'

const Div = styled.div`
    background: ${props => `url(${props.star}) center no-repeat`};
    background-size: 40px 35px;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    width: 40px;
`;

const Star = props => (
    <Div
        star={props.rating < props.star ? starLight : starSolid }
        onClick={() => props.submitRating(props.star)}
    ></Div>
)

export default Star