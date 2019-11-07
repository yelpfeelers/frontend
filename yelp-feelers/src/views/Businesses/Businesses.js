import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string'
import { locationSearch } from '../../actions';
import Business from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Unavailable from '../../components/Unavailable/Unavailable';
import './Businesses.scss';


class Results extends Component {
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values)

        // this.props.locationSearch(this.state.location)
        //   .then(() => {
        //     this.props.history.push('/businesses');
        //   })
    }
    render() {
        return (
            <>
                <Header />
                {
                    this.props.businesses.length < 1 ?
                    <Unavailable /> : null
                }
                <main className="businesses-main">
                    <section className="businesses-map">
                        {
                            this.props.businesses.length > 0 ?
                            <Map businesses={this.props.location} /> :
                            null
                        }
                    </section>
                    <section className="businesses-results">
                        {
                            this.props.businesses.map(business => <Business key={business.id} business={business} />)
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
    businesses: state.businesses,
    location: state.businesses.map(b => b.coordinates ? b.coordinates : null)
});

export default connect(mapStateToProps, { locationSearch })(withRouter(Results));