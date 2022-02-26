
import Header from '../../components/header/header';
import logo from '../../asset/logo.png';
import React, { Component } from "react";
import Slider from "react-slick";
import './body.scss'
const Home: any = () => {
    return (
        <div className="">
            <Header />
            <div className=''>
         <div  className=''><img src={logo} alt="logo2"className='logo2' /> </div>
            <div className='body'>
                <h1 className='label1'>C&T</h1>
                <h2 className='label2'>GIẢI PHÁP CHO MỌI THANH TOÁN ONLINE</h2>
            </div>
  
        </div>
        </div>
    );
   
}
export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
export default Home;}