import React from 'react';
import './header.scss'
// import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';


const Header: any = () => {
    return (
        <div className="header">
            <div className="main-logo" >
            <img src={`${process.env.PUBLIC_URL}/asset/logo.png`} /> 
            <h1 className=''>ĐIỆN TỬ C&T</h1>
            </div>

            <div className="header-right">
                <Link to="/" className="introduce" >GIỚI THIỆU</Link>
                <Link to="/product" className="product" >SẢN PHẨM</Link>
                <Link to="" className='solution' >GIẢI PHÁP</Link>
                <Link to="" className='software' >PHẦN MỀM</Link>
                <Link to="" className='contact' >LIÊN HỆ</Link>
            </div>
        </div>
    );
}

export default Header;