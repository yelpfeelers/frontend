import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookmarks, updateBookmarks } from '../../actions';
import Bookmark from '../../components/Bookmark/Bookmark';
import Header from '../../components/Header/Header';

class Bookmarks extends Component {
    componentDidMount() {
        this.props.fetchBookmarks()
    }

    updateBookmarks = bm => {
        this.props.updateBookmarks(bm);
    }

    render() {
        return (
            <>
                <Header />
                <main className="bookmarks-main">
                    <section className="bookmarks-map"></section>
                    <section className="bookmarks-results">
                        {
                            this.props.bookmarks.map(bookmark => (
                                <Bookmark
                                    key={bookmark.id}
                                    bookmark={bookmark}
                                    update={this.updateBookmarks}
                                />
                            ))
                        }
                    </section>
                </main>
                <main>

                </main>
            </>
        )
    }
}

const mapStateToProps = state => ({
    bookmarks: state.bookmarks
})

export default connect(mapStateToProps, { fetchBookmarks, updateBookmarks })(Bookmarks);