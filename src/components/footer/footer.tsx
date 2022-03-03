import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom';


const Footer: any = () => {
    return (
        <div className="footer">
            <div className='about'>
                <h2>Công Ty</h2>
                <p>Bạn chỉ cần chạm còn lại chúng tôi lo</p>
                <div className='main-logo'>
                    <img src="" alt="" />
                    <h1 className=''>@gmail.com</h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;