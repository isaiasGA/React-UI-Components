import React from 'react';
import './Header.css';
import moment from 'moment';

const time = moment();


const HeaderTitle = () => {
    return (
        <div className='title'>
            <h1>LambdaSchool</h1>
            <span className='time-stamp'>{time.format('MMM Do')}</span> 
        </div>
    )
}

export default HeaderTitle;