import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bookmark from '../../assets/bookmark.svg';
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

const SubTitle = styled.h2`
    color: #ffff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weigth: 200;
    margin-right: 10px;
`;

const Header = props => (
    <MainHeader>
        <Nav>
            <Div>
                <Icon
                    onClick={props.history.goBack}
                    icon={back}
                />
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
                <Div>
                    <SubTitle>
                        {
                            localStorage.getItem('username')
                        }
                    </SubTitle>
                    <Link to="/bookmarks">
                        <Icon icon={bookmark} />
                    </Link>
                </Div>
            </Div>
        </Nav>
    </MainHeader>
)

export default withRouter(Header);