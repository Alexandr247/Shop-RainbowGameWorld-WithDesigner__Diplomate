import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import './login.css'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate(); // Для перенаправления после входа в аккаунт

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const [inputs, setInputs] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // Отправляем данные на сервер
            const response = await axios.post('http://localhost:4444/auth/login', formData)

            // Если вход выполнен успешно, мы обрабатываем ответ
            console.log(response.data)

            // Проверяем вошел ли пользователь
            setIsLoggedIn(true);

            // Перенаправляем пользователя на главную страницу после не успешного входа
            navigate('/');

        } catch (error) {
            // Если произошла ошибка при входе, вы можете обработать её здесь
            console.error('Ошибка при входе:', error);

            // Выводим ошибку пользователю
            setInputs('Пароль должен содержать минимум 5 символов');

            // Перенаправляем пользователя на страницу регистрации после не успешного входа
            navigate('/register');
        }
    }

    useEffect(() => {
        // Прокручиваем страницу в самый верх после перенаправления
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="login">
            <div className="container">
                <div className="login__content">
                    <div className="inputs__message">{inputs}</div>
                    <div className="login__title">Вхід</div>
                    <div className="login__form-btn">
                        <div className="login__form">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Пароль"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />

                                <div className="login__btn">
                                    <button type="submit">Увійти</button>
                                </div>

                                {/* Проверяем вошел ли пользователь */}
                                {isLoggedIn ? (
                                    <div className="login__successful-entry">
                                        <p type="submit">Ви успішно увійшли в акаунт</p>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login