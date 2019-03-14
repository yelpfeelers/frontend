import React from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import './Account.scss';


const Account = props => (
    <main className="account-main">
        <div className="split-adjust">
            <section className="account-form">
                <div className="account-container">
                    <div className="logo"></div>
                    <Form history={props.history} />
                </div>
                
            </section>
        </div>
        <div className="split">
            <section className="account-aside"></section>
        </div>
        
    </main>
)

const mapStateToProps = state => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps)(Account);