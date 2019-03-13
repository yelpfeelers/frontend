import React, { Component } from 'react';
import { connect } from 'react-redux';
import { locationSearch } from '../../actions';
import './Search.scss';

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
    this.props.locationSearch(this.state.location)
      .then(() => {
        this.props.history.push('/businesses');
      })
    this.setState({ location: '' });
  }

  render() {
    return (
      <main>
        <section>

        </section>
        <section>
          <form
            onSubmit={this.submit}
          >
            <input
              name="location"
              onChange={this.handleChange}
              placeholder="Enter location..."
              type="text"
            />
            <button>></button>
          </form>
        </section>
      </main>
      
    );
  }
}

export default connect(null, { locationSearch })(Search);
