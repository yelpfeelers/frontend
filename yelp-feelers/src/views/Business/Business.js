import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { fetchReviews } from '../../actions';

class Business extends Component {
    constructor() {
        super();
        this.state = {
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

const mapStateToProps = (state, props) => ({
    business: state.businesses.filter(b => b.id === props.match.params.businessId)[0]
})

export default connect(mapStateToProps, { fetchReviews })(Business);