import Header from '../../components/header/header';
import logo from '../../asset/logo.png';
import React, { Component } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './body.scss'
import ReactPlayer from 'react-player'
//mport videowibu from '../../asset/video/videowibu.mp4';

const Home = () => {
    return (      
            
     
        <div className="top">
            <Header />
            <br/>
            <br/>
            <br/>
            <div className=''>
         <div  className='logo2'><img src={logo} alt="#"className='logo2' /> </div>
            <div className='body'>
                <h1 className='label1'>C&T</h1>
                <h2 className='label2'>GIẢI PHÁP CHO MỌI THANH TOÁN ONLINE</h2>             
            </div>
            <div className='video'>
            <ReactPlayer fluid='false'
            url="https://www.youtube.com/watch?v=R5yfM_UlucY" type="video/mp4" width={1200} height={800}
             />
</div>
            <div className='slider'>
              <h2> Công Ty C&T </h2>
              <Slider {...settings}>
                <div className='slider'>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
                <div>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
                <div>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
                <div>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
                <div>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
                <div>
                <img src={logo} alt="logo2"className='logo2' />
                </div>
              </Slider>
            </div>
        </div>
        </div>
    );
   
    }

 
    
     
   
export default Home  ;
var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    centerMode:true,
    speed: 1000,
  
    slidesToShow: 1,
    slidesToScroll: 1
}
