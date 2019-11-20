import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    height: calc(100vh - 150px);
`

const Div = styled.div`
    background-color: #ffffff;
    border-bottom: 1px solid #cddae2;
    box-sizing: border-box;
    margin: auto;
    max-width: 500px;
    width: 90%;
    padding: 30px 30px 30px 30px;
`;

const Title = styled.h1`
    color: black;
    font-size: 2rem;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
`;

const Button = styled.button`
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin: auto;
    margin-top: 20px;
    padding: 3px 20px;
    letter-spacing: 0.05rem;
    background-color: #d32323;
`;

const Unavailable = () => (
    <>
        <Main>
            <Div>
                <Title>This page is unavailable please return to the home page.</Title>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Div>
           
        </Main>
    </>
)

export default Unavailable;