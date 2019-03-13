import React from 'react'
import styled from 'styled-components';
import star from '../../assets/star-light.svg';

const Article = styled.article`
    padding: 0 10px;
`;


const Div = styled.div`
    text-align: center;
    width: 50px;
`;

const Icon = styled.div`
    height: 30px;
    width: 30px;
    margin: auto;
    background: ${props => `url(${props.icon}) center no-repeat`};
`;

const IconText = styled.p`
    font-size: 1.2rem
    padding-top: 10px;
`;

const SubTitle = styled.h2`
    font-size: 1.4rem
    line-height: 1.3;
`;

const Review = props => (
    <Article>
        <SubTitle>{props.review}</SubTitle>
        <Div>
            <Icon icon={star} />
            <IconText>{props.truthy ? props.adjusted : props.score} Star</IconText>
        </Div>
    </Article>
)

export default Review;