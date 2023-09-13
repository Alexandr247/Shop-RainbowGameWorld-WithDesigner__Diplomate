import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Modal from '../modal/Modal';

import logoImg from './../../img/icons/logo.jpg'
import searchImg from './../../img/icons/search.svg'
import cartImg from './../../img/icons/cart.svg'
import loginImg from './../../img/icons/login.svg'

import './header.css'

const Header = ({ isLoggedIn }) => {

    //* --- Модальное окно
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo" />
                    </div>

                    <div className="header__search">
                        <input type="text" placeholder='Пошук' />
                        <button type='submit'>
                            <span className='header__search-line'></span>
                            <img src={searchImg} alt="Search" />
                        </button>
                    </div>

                    <div className="header__cart-login">

                        <div className="header__cart" onClick={openModal}>
                            <button><img src={cartImg} alt="Cart" /></button>
                            <span className="header__cart-price">0,0 грн</span>
                            <span className="header__cart-quantity">0</span>
                        </div>

                        {/* --- Модальное окно --- */}
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            {/* <h2>Заголовок модального окна</h2>
                            <p>Содержимое модального окна...</p> */}
                        </Modal>

                        <div className="header__login">

                            {/* Проверяем вошел ли пользователь */}
                            {isLoggedIn ? (
                                <>
                                    <img src={loginImg} alt="Login" />
                                    <div className="header__login-register">
                                        <a>Ви увійшли в акаунт</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img src={loginImg} alt="Login" />
                                    <div className="header__login-register">
                                        <a><Link to="/login">Вхід</Link></a>
                                        <span>|</span>
                                        <a><Link to="/register">Реестрація</Link></a>
                                    </div>
                                </>
                            )}

                            {/* <img src={loginImg} alt="Login" />
                            <div className="header__login-register">
                                <a><Link to="/login">Вхід</Link></a>
                                <span>|</span>
                                <a><Link to="/register">Реестрація</Link></a>
                            </div> */}

                        </div>
                    </div>
                </div>

                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/">головна</Link></li>
                        <li><Link to="/catalog">каталог</Link></li>
                        <li><Link to="/action">акції</Link></li>
                        <li><Link to="/contacts">контакти</Link></li>
                        <li><Link to="/about">про нас</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header