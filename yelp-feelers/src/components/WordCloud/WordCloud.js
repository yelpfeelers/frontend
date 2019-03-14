import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    background-color: white;
    border-bottom: 1px solid #cddae2;
    margin-top: 30px;
    padding: 10px;
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
`;

const Title = styled.h1`
`;

const WordCloud = props => (
    <>
        <Section>
            <Article>
                <Title>Sentiment Analysis</Title>
                <SubTitle>
                    What do reviews really mean?  Our algorithm 
                    finds the meaning in their words.  We look for sentiment
                    to determine a user's real perception of a business, and 
                    help you make informed decisions on your quest for tacos.
                </SubTitle>
                <Title>Meet the Word Cloud</Title>
                <SubTitle>
                    The Word Cloud uses Sentiment Analysis
                    to compile key words from user reviews, giving you 
                    a clearer picture of the goods at a glance. 
                    The larger the word, the more often it's used.
                    Green words connote positivity, red words connote negativity.
                </SubTitle>
            </Article>
            <Container>
                {/* <Img src={`http://api.mota-analytica.io/wordcloud/${props.id}`} alt={props.id} /> */}
            </Container>
            
        </Section>
    </>
)

export default WordCloud;