import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBookmark, fetchBookmarks, updateBookmark } from '../../actions';
import Bookmark from '../../components/Bookmark/Bookmark';
import Header from '../../components/Header/Header';
import authHOC from '../../components/auth-HOC/';

class Bookmarks extends Component {
  componentDidMount() {
    this.props.fetchBookmarks()
  }

  deleteBookmark = id => {
    this.props.deleteBookmark(id);
  }

  updateBookmark = bm => {
    this.props.updateBookmark(bm);
  }

  render() {
    return (
      <>
        <Header />
        <main className="bookmarks-main">
          <section className="bookmarks-map"></section>
          <section className="bookmarks-results">
            {
              this.props.bookmarks.sort((a, b) => (
                a.id - b.id
              )).map(bookmark => (
                <Bookmark
                  deleteBookmark={this.deleteBookmark}
                  key={bookmark.id}
                  bookmark={bookmark}
                  updateBookmark={this.updateBookmark}
                />
              ))
            }
          </section>
        </main>
      </>
    )
  }
}

const mapStateToProps = state => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps, { deleteBookmark, fetchBookmarks, updateBookmark })(authHOC(Bookmarks));