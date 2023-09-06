import React, { useState } from 'react';

import arrowImg from './../../img/icons/arrow-down.svg'
import actionImg1 from './../../img/product/product-1.jpg'

import './abc.css'

const Abc = () => {

    //* Выпадающее меню
    const [selectedOption, setSelectedOption] = useState('default');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    };

    const sortOption = [
        { value: 'default', label: 'Сортувати за' },
        { value: 'price', label: 'За ценой' },
        { value: 'rating', label: 'За рейтингом' },
    ];

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__container">

                    <div className="catalog__content">

                        {/* Выпадающее меню */}
                        <div className="catalog__sorting">
                            <select value={selectedOption} onChange={handleOptionChange}>
                                {sortOption.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <span className='catalog__select-line'></span>
                            <img src={arrowImg} alt="Arrow" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Abc