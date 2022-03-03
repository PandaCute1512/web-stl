import React from 'react';
import Banner from '../banner/banner';
import './dasboard.scss';
import kioskimg from '../../../../asset/kioskimg.png';
import maythunganimg from '../../../../asset/maythunganimg.png';
import softwareimg from '../../../../asset/softwareimg.png';
import { Link } from 'react-router-dom';

const Dasboard: any = () => {
    return (
        <div className="">
            <Banner />
            <body>
                <br />
                <br />
                <br />
                <form>
                    <input type="text" name="search" placeholder="Search..."></input>
                </form>
                <p className='sanpham'>Sản Phẩm</p>
                <br />
                <div className='btncategory'>
                    <div className='div-btn'>
                        <button className='iconn btnkiosk'></button>
                        <p className='p-items'>Kiosk</p>
                    </div>
                    <div className='div-btn'>
                        <button className='iconn btnmaythungan'></button>
                        <p className='p-items'>Máy Thu Ngân</p>
                    </div>
                    <div className='div-btn'>
                        <button className='iconn btnphanmem'></button>
                        <p className='p-items'>Phần Mềm</p>
                    </div>
                </div>
                <br />
                <br />
                <div className='product'>
                    <div className='product-card'>
                        <div className='w-64 h-32'>
                            <img src={kioskimg} alt="kioskimg" className='w-64 h-32' />
                        </div>
                        <div className='container'>
                            <p className='product-name'>Kiosk</p>
                            <Link to="/" className='detail'>Chi tiết</Link><br />
                            <Link to="/">
                                <button className='btn-contact'>Liên Hệ Ngay</button>
                            </Link>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='fix'>
                            <img src={maythunganimg} alt="maythunganimg" />
                        </div>
                        <div className='container'>
                            <p className='product-name'>Máy Thu Ngân</p>
                            <Link to="/" className='detail'>Chi tiết</Link><br />
                            <Link to="/">
                                <button className='btn-contact'>Liên Hệ Ngay</button>
                            </Link>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='fix'>
                            <img src={softwareimg} alt="softwareimg" />
                        </div>
                        <div className='container'>
                            <p className='product-name'>Phần Mềm</p>
                            <Link to="/" className='detail'>Chi tiết</Link><br />
                            <Link to="/">
                                <button className='btn-contact'>Liên Hệ Ngay</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <br />
                <br />
            </body>
        </div>
    );
}

export default Dasboard;
