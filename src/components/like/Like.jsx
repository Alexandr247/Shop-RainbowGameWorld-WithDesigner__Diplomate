import React from 'react'

import './like.css'
import SliderHorizontal from '../sliders/slider-horizontal-1/SliderHorizontal1'

const Like = () => {
    return (
        <section className='like'>
            <div className="container">
                <div className="like__content">

                    <div className="like__title">Вам також сподобаеться</div>

                    <div className="like__slider">
                        
                        <SliderHorizontal/>

                    </div>

                    <div className="like__btn">
                        <button>Дивитися усі товари</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Like