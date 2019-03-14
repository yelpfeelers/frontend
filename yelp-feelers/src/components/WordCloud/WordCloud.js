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

const SubTitle = styled.h1`
    font-size: 1.4rem;
    line-height: 1.1;
`;

const WordCloud = props => (
  <>
    <Section>
      <Article>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </SubTitle>
      </Article>
      <Container>
        <Img src={`https://api.mota-analytica.io/wordcloud/${props.id}`} alt={props.id} />
      </Container>

    </Section>
  </>
)

export default WordCloud;