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
                <div className='btncategory'>
                    <div className='div-btn'>
                    <button className='btnkiosk'></button>
                    <p>Kiosk</p>
                    </div>   
                    <div className='div-btn'>   
                    <button className='btnmaythungan'></button>
                    <p>Máy thu ngân</p>
                    </div>      
                    <div className='div-btn'>
                    <button className='btnphanmem'></button>
                    <p>Phần mềm</p>
                    </div>      
           
                </div>
            </body>
        </div>


    );
}

export default Dasboard;
