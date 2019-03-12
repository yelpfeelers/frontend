import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Div = styled.div`

`;

const Grid = styled.article`
    display: flex;
    padding: 10px;
`;

const Icon = styled.div`
`;

const Image = styled.img`
    height: 200px;
    width: 200px;
`;

const Reviews = styled.div`
`;

const Section = styled.section`
`;

const SubTitle = styled.h2`
`;

const Title = styled.h1`
`;



const Business = props => (
    <Grid>
        <Link to={`/businesses/${props.business.id}`}>
            <Image src={props.business.image_url} />
        </Link>
        <Div>
            <Section>
                <Link to={`/businesses/${props.business.id}`}>
                    <Title>{props.business.name}</Title>
                </Link>
                <SubTitle>{props.business.location.address1}</SubTitle>
                <SubTitle>{props.business.location.address2}</SubTitle>
                <SubTitle>{props.business.location.address3}</SubTitle>
                <SubTitle>{props.business.location.city}</SubTitle>
            </Section>
            <Section>
                <Div>
                    <Icon>{props.business.display_phone}</Icon>
                </Div>
                <Div>
                    <Icon>{props.business.distance}</Icon>
                </Div>
                <Div>
                    <Reviews>{props.business.rating}/5</Reviews>
                    <Reviews>{props.business.review_count} Reviews</Reviews>
                </Div>
                <Div>
                    <Icon>{props.business.is_closed ? 'Closed' : 'Open'}</Icon>
                </Div>
                
            </Section>
        </Div>
    </Grid>
)

export default Business;