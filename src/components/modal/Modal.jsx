import React, { useState } from 'react'

import crossImg from './../../img/icons/cross.svg'
import manufactureImg from './../../img/manufacturer/fmc.jpg'
import actionImg2 from './../../img/product/product-4.jpg'

import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {

    //* --- Счётчик
    const [count, setCount] = useState(1);

    const onClickPlus = () => {
        if (count < 9999)
            setCount(count + 1);
        else
            setCount(count);
    };

    const onClickMinus = () => {
        if (count > 0)
            setCount(count - 1);
        else
            setCount(count);
    };


    if (!isOpen) return null;

    return (
        <section className='modal'>
            <div className="modal__content">

                {children}
                <img className="modal-close-button" onClick={onClose} src={crossImg} alt="Cross" />

                <div className="modal__title">Кошик</div>

                <div className="modal__content-inside">

                    <div className="modal__product-name">Гербіцид Комманд®, ФМС УКРАЇНА</div>

                    <div className="modal__product">

                        <div className="modal__img-company">

                            <div className="modal__img-button">
                                <img src={actionImg2} alt="Product" />
                            </div>

                            <div className="modal__company">
                                <div className="modal__company-title">Виробник</div>
                                <div className="modal__company-manufacturer">
                                    <img src={manufactureImg} alt="Manufacture" />
                                    <div className="modal__company-manufacturer-text">ФМС Украина</div>
                                </div>
                            </div>
                        </div>

                        <div className="modal__price-quantity">
                            <div className="modal__price">7814,63 грн</div>
                            <div className="modal__quantity">
                                <p>Кількість</p>
                                <button onClick={onClickMinus}>-</button>
                                <span>{count}</span>
                                <button onClick={onClickPlus}>+</button>
                            </div>
                        </div>

                    </div>

                    <div className="modal-buttons">
                        <button>Продовжити покупки</button>
                        <button>Оформити заказ</button>
                    </div>
                </div>








            </div>
        </section>
    )
}

export default Modal