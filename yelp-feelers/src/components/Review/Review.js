import React from 'react'
import styled from 'styled-components';
import star from '../../assets/star-light-original.svg';

const Article = styled.article`
    background-color: #ffffff;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    margin-top: 20px;
    padding: 10px 15px;
`;

const SubTitle = styled.h2`
    font-size: 1.4rem
    line-height: 1.3;
    flex: 1;
`;

const Div = styled.div`
    display: flex;
    text-align: center;
    width: 100px;
`;

const Container = styled.div`
    margin: auto
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



const Review = props => (
    <Article>
        <SubTitle>{props.review}</SubTitle>
        <Div>
            <Container>
                <Icon icon={star} />
                <IconText>{props.truthy ? props.adjusted.toFixed(2) : props.score} Star</IconText>
            </Container>
        </Div>
    </Article>
)

export default Review;