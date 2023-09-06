import React from "react";
import Slider from "react-slick";

import Card from "./../../card/Card";

import actionImg1 from './../../../img/product/product-1.jpg'
import actionImg2 from './../../../img/product/product-2.jpg'
import actionImg3 from './../../../img/product/product-3.jpg'
import actionImg4 from './../../../img/product/product-4.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderHorizontal1.css"


const Arrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
    />
);

const SliderHorizontal1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        // <div className="container">
        <div className="horizontal1-slider">
            <div className='sliders__content'>
                <Slider {...settings}>

                    <div>
                        <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                    </div>
                    <div>
                        <Card img={actionImg2} title='Playmobil City Life Modern House' availabilitye='В наявності' price='1800 грн' quanity='1 шт' />
                    </div>
                    <div>
                        <Card img={actionImg3} title='Mega Bloks First Builders Big Building Bag' availabilitye='Немає в наявності' price='600 грн' quanity='1 шт' />
                    </div>
                    <div>
                        <Card img={actionImg4} title='Magformers Rainbow Magnetic Building Blocks' availabilitye='В наявності' price='1200 грн' quanity='1 шт' />
                    </div>
                    <div>
                        <Card img={actionImg1} title='Напишите текст' availabilitye='Немає в наявності' price='n грн' quanity='n шт' />
                    </div>

                </Slider>
            </div>
        </div>


        // </div>

    );
};

export default SliderHorizontal1;
