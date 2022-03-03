import React from 'react';
import './banner.scss'

const Banner: any = () => {
    return (
        <div >
           <img className="w-full h-72" src={`${process.env.PUBLIC_URL}/asset/banner.jpg`}/>
        </div>


    );
}

export default Banner;