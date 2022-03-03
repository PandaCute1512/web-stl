import React from 'react';
import './header.scss'
// import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';


const Header: any = () => {
    return (
        <div className="header flex flex-row">
            <div className="flex flex-row" >
                <img className='h-24 w-auto ' src={`${process.env.PUBLIC_URL}/asset/logo.png`} />
                <h1 className=''>ĐIỆN TỬ C&T</h1>
            </div>
            <div className='flex flex-grow'></div>
            <div className="">
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