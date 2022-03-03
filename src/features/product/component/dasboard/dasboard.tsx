import React from 'react';
import Banner from '../banner/banner';
import './dasboard.scss';
import { Link } from 'react-router-dom';

const Dasboard: any = () => {
    return (
        <div className="">
            <Banner />
            <body className=''>
                <div className='mt-8 grid justify-items-center '>
                    <input className='' type="text" name="search" placeholder="Search..."/>
                </div>
                <p className='sanpham mt-8'>Sản Phẩm</p>
                <br />
                <div className='btncategory mt-12'>
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
                        <div className="">
                            <img src={`${process.env.PUBLIC_URL}/asset/kioskimg.png`} className='img-card' />
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
                            <img  className='img-card'src={`${process.env.PUBLIC_URL}/asset/maythunganimg.png`} />
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
                            <img  className='img-card' src={`${process.env.PUBLIC_URL}/asset/softwareimg.png`}/>
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
