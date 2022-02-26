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
            </body>
        </div>


    );
}

export default Dasboard;