import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessComponent from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import Review from '../../components/Review/Review';
import { bookmarkBusiness, fetchReviews } from '../../actions';
import Star from '../../components/Star/Star';
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
                 <main className="business-main">
                     <section className="business-analysis"></section>
                     <section className="business-data">
                            <BusinessComponent business={this.props.business} />
                            <div className="bookmark">
                                <button
                                    onClick={this.bookmarkBusiness}
                                >
                                    Bookmark Business
                                </button>
                            </div>
                        <section className="business-reviews">
                            <button
                                onClick={this.toggleReviews}
                            >
                               Display {this.state.truthy ? 'original' :  'adjusted'} reviews
                            </button>
                            {
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
                 <main>

                 </main>
            </>
        )
    }
}

const mapStateToProps = (state, props) => ({
    business: state.businesses.filter(b => b.id === props.match.params.businessId)[0]
})

export default connect(mapStateToProps, { bookmarkBusiness, fetchReviews })(Business);