import React from 'react'

import Card from '../card/Card'

import actionImg1 from './../../img/product/product-1.jpg'
import actionImg2 from './../../img/product/product-2.jpg'
import actionImg3 from './../../img/product/product-3.jpg'
import actionImg4 from './../../img/product/product-4.jpg'

import './action.css'
import SliderHorizontal from '../sliders/slider-horizontal-1/SliderHorizontal1'



const Action = () => {
    return (
        <section className='action'>
            <div className="container">
                <div className="action__content">

                    <div className="action__title">Акції</div>

                    <div className="action__slider">
                        {/*                         
                        <Card img={actionImg1} title='LEGO Classic Large Creative Brick Box' availabilitye='В наявності' price='1500 грн' quanity='1 шт'/>
                        <Card img={actionImg2} title='Playmobil City Life Modern House' availabilitye='В наявності' price='1800 грн' quanity='1 шт'/>
                        <Card img={actionImg3} title='Mega Bloks First Builders Big Building Bag' availabilitye='Немає в наявності' price=' 600 грн' quanity='1 шт'/>
                        <Card img={actionImg4} title='Magformers Rainbow Magnetic Building Blocks' availabilitye='В наявності' price='1200 грн' quanity='1 шт'/>
                        */}

                        <SliderHorizontal/>

                    </div>


                    <div className="action__btn">
                        <button>Дивитися усі товари</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Action