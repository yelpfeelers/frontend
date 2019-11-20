import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string'
import { locationSearch } from '../../actions';
import Business from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Unavailable from '../../components/Unavailable/Unavailable';
import './Results.scss';


class Results extends Component {
    componentDidMount() {
        const { location } = queryString.parse(this.props.location.search)
        if (location) {
            this.props.locationSearch(location)
        } else {
            this.props.history.push('/');
        }
        
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
                        <Map />
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
    businesses: state.businesses
});

export default connect(mapStateToProps, { locationSearch })(withRouter(Results));