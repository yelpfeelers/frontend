import React from 'react';
import { connect } from 'react-redux';
import Bookmarks from '../Bookmarks/Bookmarks';
import Form from '../../components/Form/Form';
import './Account.scss';


const Account = props => (
    <main className="account-main">
        {
            // props.isAuth === false ?
            // <Form /> :
            // <Bookmarks />
        }   
        <section className="account-form">
            <div className="account-container">
                <div className="logo"></div>
                <Form />
            </div>
            
        </section>
        <section className="account-aside"></section>
    </main>
)

const mapStateToProps = state => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps)(Account);