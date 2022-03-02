import React from 'react';
import Banner from '../banner/banner';
import './dasboard.scss';
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
                        <p className='p-items'>Máy thu ngân</p>
                    </div>
                    <div className='div-btn'>
                        <button className='iconn btnphanmem'></button>
                        <p className='p-items'>Phần mềm</p>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Dasboard;
