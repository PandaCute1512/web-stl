import React from 'react';
import Banner from '../banner/banner';
import './dasboard.scss'
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
                <br />
                <button className='btnkiosk'></button><br />Kiosk
                <button className='btnmaythungan'></button><br />Máy thu ngân
                <button className='btnphanmem'></button><br />Phần mềm
            </body>
        </div>


    );
}

export default Dasboard;
