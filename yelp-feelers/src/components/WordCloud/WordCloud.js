import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    background-color: white;
    border-bottom: 1px solid #cddae2;
    display: block;
    margin-top: 30px;
    padding-bottom: 10px;
`;

const Container = styled.div`
    background-color: white;
    border: 1px solid #cddae2;
    height: 300px;
    margin-top: 20px;

    @media (min-width: 1000px) {
        height: 400px;
    }
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
`;

const Section = styled.section`
    display: block;
    max-width: 400px;
    right: 0;
    position: absolute;
    width: 95%;

    @media (min-width: 900px) {
        width: 90%;
    }

    @media (min-width: 1000px) {
        width: 85%;
    }
`;

const SubTitle = styled.p`
    font-size: 1.4rem;
    line-height: 1.1;
    margin: 0px 10px;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    margin: 0px 10px 10px;
    padding-top: 10px;
`;

const WordCloud = props => (
    <>
        <Section>
            <Article>
                <Title>Display Adjusted Reviews</Title>
                <SubTitle>
                    What do reviews really mean?  Our algorithm 
                    finds the meaning in their words.  We look for sentiment
                    to determine a user's real perception of a business, and 
                    help you make informed decisions on your quest for tacos.
                </SubTitle>

                <Title>Meet the Word Cloud</Title>
                <SubTitle>
                    Our Word Cloud algorithm provides an overall review
                    of  abusiness at a glance by compiling all user reviews.
                    The larger the word, the more often it's been used.
                    Green words connote positivity, red words connote negativity.
                </SubTitle>
            </Article>
            <Container>
                <Img src={`https://api.mota-analytica.io/wordcloud/${props.id}`} alt={props.id} />
            </Container>
            
        </Section>
    </>
)

export default WordCloud;