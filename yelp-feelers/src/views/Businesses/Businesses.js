import React from 'react';
import { connect } from 'react-redux';
import Business from '../../components/Business/Business';
import Header from '../../components/Header/Header';
import './Businesses.scss';


const Businesses = props => (
    <>
        <Header />
        <main className="businesses-main">
            <section className="businesses-map"></section>
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
    businesses: state.businesses
});

export default connect(mapStateToProps)(Businesses);