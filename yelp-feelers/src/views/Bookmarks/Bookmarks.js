import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookmarks } from '../../actions';
import Header from '../../components/Header/Header';

class Bookmarks extends Component {
    componentDidMount() {
        this.props.fetchBookmarks()
    }

    render() {
        return (
            <>
                <Header />
                <main>

                </main>
            </>
        )
    }
}

export default connect(null, { fetchBookmarks })(Bookmarks);