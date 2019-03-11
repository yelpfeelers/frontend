import React from 'react';
import { connect } from 'react-redux';
import Bookmarks from '../Bookmarks/Bookmarks';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';


const Account = props => (
    <>
        <Header />
        <main>
            {
                props.isAuth === false ?
                <Form /> :
                <Bookmarks />
            }
        </main>
   </>
)

const mapStateToProps = state => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps)(Account);