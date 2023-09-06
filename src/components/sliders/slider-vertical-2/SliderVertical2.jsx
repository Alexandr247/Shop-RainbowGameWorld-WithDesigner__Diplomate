import React from "react";
import Slider from "react-slick";

import Card from "./../../card/Card";

import actionImg1 from './../../../img/product/product-1.jpg'
import actionImg2 from './../../../img/product/product-2.jpg'
import actionImg3 from './../../../img/product/product-3.jpg'
import actionImg4 from './../../../img/product/product-4.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderVertical2.css'

const Arrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
    />
);

const SliderVertical2 = () => {

    const settings = {
        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 3,
        // speed: 500,
        // rows: 2,
        // slidesPerRow: 2,

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        rows: 5,
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
        <div className="vertical2-slider">
            {/* <div className="sliders__container"> */}
            <div className="container">
                <div className="abc__content">

                    <Slider {...settings}>

                        {/* 1 */}
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>

                        {/* 2 */}
                        <div>
                            <Card img={actionImg2} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>

                        {/* 3 */}
                        <div>
                            <Card img={actionImg3} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>

                        {/* 4 */}
                        <div>
                            <Card img={actionImg4} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>
                        <div>
                            <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт' />
                        </div>

                    </Slider>

                </div>
            </div>

            {/* </div> */}
        </div>

    )
}

export default SliderVertical2