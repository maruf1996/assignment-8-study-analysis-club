import { faHeartCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="">
            <div className='d-flex align-items-center justify-content-between mt-4'>
            <h2 className='text-info heading'><span><FontAwesomeIcon icon={faHeartCircleExclamation} /></span> Study Analysis Activity</h2> 
            <h4><a href="/" className='text-decoration-none text-info home'>Home</a></h4>
            </div>
            <hr className='text-info border border-2 rounded'/>
        </div>
    );
};

export default Header;