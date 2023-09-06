import React, { useState } from 'react';

import Card from './../card/Card';
import SliderVertical from './../sliders/slider-vertical-2/SliderVertical2';

import arrowImg from './../../img/icons/arrow-down.svg'
import actionImg1 from './../../img/product/product-1.jpg'

import './catalog.css';

const Catalog = () => {

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

    //* Checkbox - Виробник
    const [selectedManufacturers, setSelectedManufacturers] = useState([]);

    const manufacturer = [
        'Нертус',
        'Басф',
        'Адама Україна',
        'Байєр',
        'ГЗД',
        'Штефес',
    ];

    //TODO: Либо сделать всем отдельную функицю, либо сделать всем одну функцию (Это отдельная)
    const manufacturerCheckboxChange = (manufacturer) => {
        if (selectedManufacturers.includes(manufacturer)) {
            setSelectedManufacturers(selectedManufacturers.filter(item => item !== manufacturer));
        } else {
            setSelectedManufacturers([...selectedManufacturers, manufacturer]);
        }
    };

    //* Checkbox - Культура
    const [selectedCultures, setSelectedCultures] = useState([]);

    const cultures = [
        'Соняшник',
        'Кукурудза',
        'Пшениця',
        'Ячмінь',
        'Ріпак',
        'Соя',
        'Горох',
        'Боби',
        'Гірчиця',
        'Горошок',
        'Житняк',
        'Квасоля',
        'Конюшина',
        'Кострець/Костриця',
        'Люцерна',
        'Тимофіївка',
        'Тритикале',
        'Цукровий буряк',
        'Кормовий буряк',
        'Інше'
    ];

    //TODO: Либо сделать всем отдельную функицю, либо сделать всем одну функцию (Это совместная)
    const culturesCheckboxChange = (value, setSelected) => {
        setSelected(prevSelected => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter(item => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    //* Checkbox - Кількість
    const [selectedQuantities, setSelectedQuantities] = useState([]);

    const quantities = [1, 2, 3, 4, 5, 6];

    //TODO: Либо сделать всем отдельную функицю, либо сделать всем одну функцию (Это совместная)
    const quantitiesCheckboxChange = (value, setSelected) => {
        setSelected(prevSelected => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter(item => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__container">

                    <div className="catalog__content">

                        <div className="catalog__title">Каталог</div>

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


                        <div className="catalog__filter-products">
                            <div className="catalog__filter-products-content">

                                <div className="catalog__filter">
                                    <div className="catalog__filter-title">Фільтр</div>
                                    {/* Checkbox - Виробник */}
                                    <div className="catalog__filter-manufacturer">
                                        <div className="catalog__filter-manufacturer-title">Виробник </div>
                                        <ul>
                                            {manufacturer.map(manufacturer => (
                                                <li key={manufacturer}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={manufacturer}
                                                            checked={selectedManufacturers.includes(manufacturer)}
                                                            onChange={() => manufacturerCheckboxChange(manufacturer)}
                                                            className="custom-checkbox"
                                                        />
                                                        {manufacturer}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Checkbox - Культура */}
                                    <div className="catalog__filter-culture">
                                        <div className="catalog__filter-culture-title">Культура</div>
                                        <ul>
                                            {cultures.map(culture => (
                                                <li key={culture}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={culture}
                                                            checked={selectedCultures.includes(culture)}
                                                            onChange={() => culturesCheckboxChange(culture, setSelectedCultures)}
                                                            className="custom-checkbox"
                                                        />
                                                        {culture}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Checkbox - Кількість */}
                                    <div className="catalog__filter-quantity">
                                        <div className="catalog__filter-quantity-title">Кількість</div>
                                        <ul>
                                            {quantities.map(quantity => (
                                                <li key={quantity}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value={quantity}
                                                            checked={selectedQuantities.includes(quantity)}
                                                            onChange={() => quantitiesCheckboxChange(quantity, setSelectedQuantities)}
                                                            className="custom-checkbox"
                                                        />
                                                        {quantity}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>





                                <div className="catalog__products">
                                    {/* <div>
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
                                        </div> */}

                                    <div>
                                        <SliderVertical/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Catalog