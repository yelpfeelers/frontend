import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import signout from '../../assets/sign-out-alt-light.svg';
import yelp from '../../assets/Yelp_trademark_RGB.png';
import back from '../../assets/chevron.svg';

const MainHeader = styled.header`
    background-color: #d32323;
    height: 50px;
    width: 100%;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1250px;
    position: relative;
    width: 90%;
`;

const Icon = styled.div`
    background: ${props => `url(${props.icon}) center no-repeat`}
    background-size: 16px;
    cursor: pointer;
    height: 25px;
    margin: auto;
    width: 25px;
`;

const Exit = styled.div`
    background: ${props => `url(${props.icon}) center no-repeat`}
    background-size: 25px;
    cursor: pointer;
    height: 25px;
    margin: auto;
    width: 25px;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    background: ${props => `url(${props.icon}) center no-repeat`}
    background-size: 100px;
    height: 50px;
    margin: auto;
    width: 80px;
`;
const Title = styled.h1`
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weigth: 200;
`;

const BookmarksHeader = props => (
    <MainHeader>
        <Nav>
            <Div>
                <Link to="/businesses">
                    <Icon
                        icon={back}
                    />
                </Link>
            </Div>
            <Div>
                <Link to="/">
                    <Div>
                        <Logo icon={yelp}/>
                        <Title>Tacopedia</Title>
                    </Div>
                </Link>
            </Div>
            <Div>
                <Exit
                    icon={signout}
                    onClick={() => {
                        localStorage.removeItem('token')
                        localStorage.removeItem('username')
                        props.history.push('/')
                    }}
                />
            </Div>
        </Nav>
    </MainHeader>
)

export default withRouter(BookmarksHeader);