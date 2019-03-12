import React from 'react';
import { connect } from 'react-redux';
import Business from '../../components/Business/Business';

import Header from '../../components/Header/Header';

const Businesses = props => (
    <>
        <Header />
        <main>
            {
                props.businesses.map(business => <Business key={business.id} business={business} />)
            }
        </main>
   </>
)
const mapStateToProps = state => ({
    businesses: state.businesses
});

export default connect(mapStateToProps)(Businesses);