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
            reviews: []
        }
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.match.params.businessId)
            .then(res => {
                this.setState({
                    reviews: res.data
                })
            });
    }

    enableRating = rating => this.setState({ rating })

    bookmarkBusiness = () => {
        console.log('worked');
        this.props.bookmarkBusiness(this.props.business, this.state.rating);
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <BusinessComponent business={this.props.business} />
                    <section className="ratings">
                        <div>
                            <Star rating={this.state.rating} enableRating={this.enableRating} star={1} />
                            <Star rating={this.state.rating} enableRating={this.enableRating} star={2} />
                            <Star rating={this.state.rating} enableRating={this.enableRating} star={3} />
                            <Star rating={this.state.rating} enableRating={this.enableRating} star={4} />
                            <Star rating={this.state.rating} enableRating={this.enableRating} star={5} />
                        </div>
                        <button
                            onClick={this.bookmarkBusiness}
                        >
                            Add Rating
                        </button>
                    </section>
                    <section>
                        {
                            this.state.reviews.map(review => <Review review={review} key={review.id} />)
                        }
                    </section>
                </main>
            </>
        )
    }
}

const mapStateToProps = (state, props) => ({
    business: state.businesses.filter(b => b.id === props.match.params.businessId)[0]
})

export default connect(mapStateToProps, { bookmarkBusiness, fetchReviews })(Business);