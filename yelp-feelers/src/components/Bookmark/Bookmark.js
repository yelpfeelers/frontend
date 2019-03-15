import React, { Component } from 'react'
import styled from 'styled-components';
import Star from '../../components/Star/Star';
import x from '../../assets/trash-alt-light.svg';

const Article = styled.article`
    background-color: #ffffff;
    border-bottom: 1px solid #cddae2;
    display: flex;
    justify-content: flex-end;
    margin: auto;
    margin-top: 30px;
    max-width: 500px;
    width: 90%;
    padding: 10px 10px 10px 10px;
`;

const Div = styled.div`
    flex: 1;
`;

const IconContainer = styled.div`
    display: flex;
    width: 50px;
`;

const Icon = styled.div`
    background: url(${x}) center no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
    display: inline-block;
    height: 20px;
    margin: auto;
    width: 20px;
`;

const Header = styled.header`
    align-items: center;
    display: flex;
    justify-content: flex-start;
`;

const Img = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
`;

const Title = styled.h1`
    color: black;
    font-size: 2rem;
    margin-left: 10px;
`;

const Section = styled.section`
    margin: auto;
    width: 200px;
`;

class Bookmark extends Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
        }
    }

    componentDidMount() {
        this.setState({ rating: this.props.bookmark.rating })
    }

    submitRating = rating => {
        this.props.updateBookmark({
            id: this.props.bookmark.id,
            name: this.props.bookmark.name,
            image_url: this.props.bookmark.image_url,
            rating: rating
        });
        this.setState({ rating })
    }

    render() {
        return (
            <Article>
                <Div>
                    <Header>
                        <Img src={this.props.bookmark.image_url} alt={this.props.bookmark.name} />
                        <Title>{this.props.bookmark.name}</Title>
                    </Header>
                    <Section>
                        <Star rating={this.state.rating} submitRating={this.submitRating} star={1} />
                        <Star rating={this.state.rating} submitRating={this.submitRating} star={2} />
                        <Star rating={this.state.rating} submitRating={this.submitRating} star={3} />
                        <Star rating={this.state.rating} submitRating={this.submitRating} star={4} />
                        <Star rating={this.state.rating} submitRating={this.submitRating} star={5} />
                    </Section>
                </Div>
                <IconContainer>
                    <Icon
                        onClick={() => this.props.deleteBookmark(this.props.bookmark.id)}
                    />
                </IconContainer>
            </Article>
        )
    }
}

export default Bookmark;