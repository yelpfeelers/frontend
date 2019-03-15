import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BusinessComponent from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import Review from '../../components/Review/Review';
import WordCloud from '../../components/WordCloud/WordCloud';
import Unavailable from '../../components/Unavailable/Unavailable';
import { bookmarkBusiness, deleteBookmark, fetchReviews } from '../../actions';
import './Business.scss';

class Business extends Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
            reviews: [],
            truthy: false,
        }
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.businessId)
            .then(res => this.setState({ reviews: res }));
    }

    bookmarkBusiness = () => {
        this.props.bookmarkBusiness(this.props.business, this.state.rating);
    }

    removeBookmark = () => {
        console.log('works')
        this.props.deleteBookmark(this.props.bookmark);
    }

    toggleReviews = () => {
        this.setState(state => {
            return ({
                truthy: !state.truthy
            });
        });
    }

    render() {
        return (
            <>
                 <Header />
                 {
                     !this.props.business ?
                     <Unavailable /> :
                    <main className="business-main">
                        <section className="business-analysis">
                            <WordCloud id={this.props.match.params.businessId} />
                        </section>
                        <section className="business-data">
                                <BusinessComponent business={this.props.business} />
                                <div className="bookmark">
                                {
                                    localStorage.getItem("token") ?
                                    (
                                        <button
                                            onClick={!this.props.bookmark ? this.bookmarkBusiness : this.removeBookmark}
                                            className={!this.props.bookmark ? 'bookmark-business' : 'remove-bookmark'}
                                        >
                                            {!this.props.bookmark ? 'Bookmark Business' : 'Remove Bookmark'}
                                        </button>
                                    ):
                                    (
                                        <Link to="/account">
                                            <button className="bookmark-business">Login to add Bookmark</button>
                                        </Link>
                                        
                                    )
                                }
                                    
                                </div>
                            <section className="business-reviews">
                                <button
                                    onClick={this.toggleReviews}
                                >
                                    {
                                        this.props.isFetching ?
                                        'Loading reviews' :
                                        `Display ${this.state.truthy ? 'original' :  'adjusted'} reviews`
                                    }
                                </button>
                                {
                                    this.props.isFetching ?
                                    <div className="spinner" /> :

                                    !this.state.reviews ?
                                    null :
                                    this.state.reviews.map((review, i) => (
                                        <Review
                                        key={i}
                                        adjusted={review['adjusted score']}
                                        review={review.review}
                                        score={review.score}
                                        truthy={this.state.truthy} 
                                        />)
                                    )
                                    
                                }
                            </section>
                        </section>

                    </main>
                }
            </>
        )
    }
}

const mapStateToProps = (state, props) => ({
    bookmark: state.bookmarks.map(b => b.business_id === props.match.params.businessId ? b.id : null)[0],
    business: state.businesses.filter(b => b.id === props.match.params.businessId)[0],
    isFetching: state.fetchingReviews
})

export default connect(mapStateToProps, { bookmarkBusiness, deleteBookmark, fetchReviews })(Business);