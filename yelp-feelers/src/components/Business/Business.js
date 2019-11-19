import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import people from '../../assets/users-light.svg';
import clock from '../../assets/clock-light.svg';
import star from '../../assets/star-light-original.svg';
import walk from '../../assets/car-light.svg';

const Flex = styled.section`
    display: flex;
    justify-content: ${props => props.justify};
    margin: auto;
    padding-bottom: ${props => props.bottom};
    max-width: ${props => props.maxWidth};
`;

const Image = styled.img`
    height: 100px;
    width: 100px;
`;

const Grid = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid #cddae2;
    margin: auto;
    margin-top: 30px;
    max-width: 500px;
    width: 90%;
    padding: 10px 10px 0px 10px;
`;

const Section = styled.section`
    padding: 0 10px;
`;

const Title = styled.h1`
    color: black;
    font-size: 2rem;
    margin-bottom: 10px;
    padding-top: 10px;
`;

const SubTitle = styled.h2`
    font-size: 1.4rem
    line-height: 1.3;
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

const calculateTravelTime = dis => {
    // A car at 60km travels 16.6667m per second.
    let time = (dis / 16.6667) / 60;
    // Divide distance in seconds by 60 to calculate distance in minutes.
    return Math.ceil(time)
}


const Business = props => (
    <Grid>
        <Flex justify={'flex-start'} bottom={'20px'}>
            <Link to={`/business/${props.business.id}`}>
                <Image src={props.business.image_url} />
            </Link>
            <Section>
                <Link to={`/business/${props.business.id}`}>
                    <Title>{props.business.name}</Title>
                </Link>
                <SubTitle>{props.business.location.display_address.filter(x => x.length > 0).join(', ')}</SubTitle>
                <SubTitle>{props.business.display_phone}</SubTitle>
            </Section>
        </Flex>
        <Flex justify={'space-around'} maxWidth={'400px'} bottom={'10px'}>
            <Div>
                <Icon icon={walk} />
                <IconText>{calculateTravelTime(props.business.distance)} mins</IconText>
            </Div>
            <Div>
                <Icon icon={clock}></Icon>
                <IconText>{props.business.is_closed ? 'Closed' : 'Open'}</IconText>
            </Div>
            <Div>
                <Icon icon={people} />
                <IconText>{props.business.review_count} Reviews</IconText>
            </Div>
            <Div>
                <Icon icon={star}/>
                <IconText>{props.business.rating} Star</IconText>
            </Div>
        </Flex>
    </Grid>
)

export default Business;