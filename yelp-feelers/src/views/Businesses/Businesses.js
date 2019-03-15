import React from 'react';
import { connect } from 'react-redux';
import Business from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Unavailable from '../../components/Unavailable/Unavailable';
import './Businesses.scss';


const Businesses = props => (
    <>
        <Header />
        {
            props.businesses.length < 1 ?
            <Unavailable /> : null
        }
        <main className="businesses-main">
            <section className="businesses-map">
                {
                    props.businesses.length > 0 ?
                    <Map businesses={props.location} /> :
                    null
                }
            </section>
            <section className="businesses-results">
                {
                    props.businesses.map(business => <Business key={business.id} business={business} />)
                }
            </section>
        </main>
        <main>
            
        </main>
   </>
)
const mapStateToProps = state => ({
    businesses: state.businesses,
    location: state.businesses.map(b => b.coordinates ? b.coordinates : null)
});

export default connect(mapStateToProps)(Businesses);