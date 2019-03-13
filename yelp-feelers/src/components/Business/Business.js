import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import img from '../../assets/walking-light.svg';

const Div = styled.div`
    width: 100%;
`;

const Grid = styled.article`
    display: flex;
    padding: 10px;
`;

const Flex = styled.section`
    display: flex;
    justify-content: space-between;
    background: #e6e6e6;
    padding: 10px 5px;
    border-bottom: 1px solid black;

    div {
        text-align: center;
        width: 80px;
    }
`;

const Header = styled.header`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    height: 20px;
    width: 20px;
    align-content: center;
    background: url(${img}) center no-repeat;
`;

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 100%;
`;

const Reviews = styled.div`
    height: 40px;
    width: 40px;
    background: green;
    border-radius: 10px;
    text-align: center;
    font-size: 25px;
    padding-top: 5px;
    color: white;
`;

const Section = styled.section`
    padding-bottom: 10px;

    div {
        display: flex;
        align-items: center;
    }
`;
const SubTitle = styled.h2`
    line-height: 1.2;
`;

const Title = styled.h1`
    color: black;
    margin-left: 15px;
`;



const Business = props => (
    <Grid>
        <Div>
            <Section>
                <Header>
                    <Link to={`/businesses/${props.business.id}`}>
                        <Image src={props.business.image_url} />
                    </Link>
                    <Link to={`/businesses/${props.business.id}`}>
                        <Title>{props.business.name}</Title>
                    </Link>
                </Header>
                <SubTitle>{props.business.location.address1}</SubTitle>
                <SubTitle>{props.business.location.address2}</SubTitle>
                <SubTitle>{props.business.location.address3}</SubTitle>
                <SubTitle>{props.business.location.city}</SubTitle>
                <Div>
                    <Icon></Icon>
                    <SubTitle>{props.business.display_phone}</SubTitle>
                </Div>
            </Section>
            <Flex>
                <Div>
                    <Icon></Icon>
                    <SubTitle>5 minutes</SubTitle>
                </Div>
                <Div>
                    <Reviews>{props.business.rating}/5</Reviews>
                    <SubTitle>{props.business.review_count} Reviews</SubTitle>
                </Div>
                <Div>
                    <Icon></Icon>
                    <SubTitle>{props.business.is_closed ? 'Closed' : 'Open'}</SubTitle>
                </Div>
            </Flex>
        </Div>
    </Grid>
)

export default Business;