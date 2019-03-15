import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBookmark, fetchBookmarks, updateBookmark } from '../../actions';
import Bookmark from '../../components/Bookmark/Bookmark';
import BookmarksHeader from '../../components/BookmarksHeader/BookmarksHeader';
import authHOC from '../../components/auth-HOC/';
import './Bookmarks.scss';

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
        <BookmarksHeader history={this.props.history} />
        <main className="bookmarks-main">
          <section className="bookmarks-banner">
            <h1>Welcome back {localStorage.getItem('username')} 👋</h1>
            <p>You currently have {this.props.bookmarks.length} {this.props.bookmarks.length === 1 ? 'bookmark' : 'bookmarks'}</p>
          </section>
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