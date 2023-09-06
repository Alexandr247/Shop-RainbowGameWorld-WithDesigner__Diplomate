import React from "react";
import Slider from "react-slick";

import Card from "./../../card/Card";

import actionImg1 from './../../../img/product/product-1.jpg'
import actionImg2 from './../../../img/product/product-2.jpg'
import actionImg3 from './../../../img/product/product-3.jpg'
import actionImg4 from './../../../img/product/product-4.jpg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderPhotos3.css"


const Arrow = ({ className, style, onClick }) => (
    <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
    />
);

const SliderPhotos3 = () => {
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        customPaging: function (i) {
            return (
                <a>
                    {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
                    <img src={require(`../../../img/product/product-${i + 1}.jpg`)} />
                </a>
            );
        },
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
        <div className="photos3-slider">
            <div className="container">
                <div className='sliders__content'>
                    <Slider {...settings}>
                        <div>
                            <img src={actionImg1} />
                        </div>
                        <div>
                            <img src={actionImg2} />
                        </div>
                        <div>
                            <img src={actionImg3} />
                        </div>
                    </Slider>

                </div>
            </div>

        </div>

    );
};

export default SliderPhotos3;
