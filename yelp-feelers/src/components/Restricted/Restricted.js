import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Restricted = () => (
    <>
        <Header />
        <main>
            <div>
                <h1>This is a restricted page go back or log in.</h1>
                <Link to="/account">
                    <button>Log in</button>
                </Link>
            </div>
           
        </main>
    </>
)

export default Restricted;