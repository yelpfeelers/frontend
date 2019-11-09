import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './Search.scss';

const StyledForm = styled.form`
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #cddae2;
  border-radius: 10px;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 10px;
  padding: 4px 10px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  margin: auto;
  margin-top: 10px;
  width: 100px;

  @media (min-width: 800px) {
    border: 1px solid black;
    color: black;
  }
`;


class Search extends Component {
  constructor() {
    super();
    this.state={
      location: ''
    }
  }

  handleChange = e => {
    this.setState({ location: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.history.push(`results?location=${this.state.location}`);
    this.setState({ location: '' });
  }

  render() {
    return (
      <main className="search-main">
        <div className="split-adjust">
          <section className="search-form">
              <div className="search-container">
                  <div className="logo"></div>
                  <StyledForm
                    onSubmit={this.submit}
                  >
                    <Input
                      name="location"
                      onChange={this.handleChange}
                      placeholder="Enter location..."
                      type="text"
                    />
                    <Button>Search</Button>
                  </StyledForm>
              </div>

          </section>
        </div>
        <div className="split">
          <section className="search-aside">
            <div className="uvp">
              <h1>
                Land the best tacos the first time, every time.  Know what to expect with
                reviews based on real feelings, not just star ratings.
              </h1>
              <p>Powered by Yelp!</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default connect(null)(Search);
