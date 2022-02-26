import React from 'react';
import './header.scss'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom';


const Header: any = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" /> 
            <div className="header-right">
                <Link to="/" className="introduce" >GIỚI THIỆU</Link>
                <Link to="/product" className="product" >SẢN PHẨM</Link>
                <a className='solution' href="#">GIẢI PHÁP</a>
                <a className='software' href="#">PHẦN MỀM</a>
                <a className='contact' href="#">LIÊN HỆ</a>
            </div>
        </div>
    );
}

export default Header;