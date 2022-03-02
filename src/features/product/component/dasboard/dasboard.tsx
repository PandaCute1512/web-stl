import React from 'react';
import Banner from '../banner/banner';
import './dasboard.scss';
import kioskimg from '../../../../asset/kioskimg.png';
import maythunganimg from '../../../../asset/maythunganimg.png';
import softwareimg from '../../../../asset/softwareimg.png';

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
                        <div className='fix'>
                            <img src={kioskimg} alt="kioskimg" />
                        </div>
                        <p className='product-name'>Kiosk</p>
                        <p className='detail'>Chi Tiết</p>
                        <button className='btn-contact'>Liên Hệ Ngay</button>
                    </div>
                    <div className='product-card'>
                        <div className='fix'>
                            <img src={maythunganimg} alt="maythunganimg" />
                        </div>
                        <p className='product-name'>Máy Thu Ngân</p>
                        <p className='detail'>Chi Tiết</p>
                        <button className='btn-contact'>Liên Hệ Ngay</button>
                    </div>
                    <div className='product-card'>
                        <div className='fix'>
                            <img src={softwareimg} alt="softwareimg" />
                        </div>
                        <p className='product-name'>Phần mềm</p>
                        <p className='detail'>Chi tiết</p>
                        <button className='btn-contact'>Liên Hệ Ngay</button>
                    </div>
                    
                </div>
                <br />
                <br />
            </body>
        </div>
    );
}

export default Dasboard;
