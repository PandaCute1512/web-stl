import React from 'react';
import './banner.scss'

const Banner: any = () => {
    return (
        <div className="banner">
           <img src={`${process.env.PUBLIC_URL}/asset/banner.jpg`}></img>
        </div>


    );
}

export default Banner;