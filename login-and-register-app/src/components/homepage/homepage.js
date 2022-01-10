import React from 'react';
import "./homepage.css";

const Homepage = ({setLoginUser}) => {
    return (
        <div className='homepage'>
        <h1>Welcome</h1>
        <p>We are the Tech Invento</p>
        <div className='button' onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage;
