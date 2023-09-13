import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

import './register.css'

const Register = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate(); // Для перенаправления после регистрации

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',

        //TODO: Аватарка пользователя
        // avatarUrl: '', 
    })

    const [error, setError] = useState(null); // Состояние для ошибки

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // Отправляем данные на сервер
            const response = await axios.post('http://localhost:4444/auth/register', formData)

            // Если вход выполнен успешно, мы обрабатываем ответ
            console.log(response.data)

            // Проверяем вошел ли пользователь
            setIsLoggedIn(true);

            // Перенаправляем пользователя на главную страницу после успешной регистрации
            navigate('/');

        } catch (error) {
            // Если произошла ошибка, сохраняем сообщение об ошибке в состоянии error
            setError('Пароль должен содержать минимум 5 символов');

            console.error('Ошибка при регистрации:', error)
        }
    }

    useEffect(() => {
        // Прокручиваем страницу в самый верх после перенаправления
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="register">
            <div className="container">
                <div className="register__content">
                    <div className="register__title">Реєстрація</div>
                    <div className="register__form-btn">
                        <div className="register__form">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Повне ім'я"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
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
                                {/* //TODO: Аватарка пользователя */}
                                {/* <input
                                    type="url"
                                    id="avatarUrl"
                                    name="avatarUrl"
                                    placeholder="UrlPhoto"
                                    value={formData.avatarUrl}
                                    onChange={handleChange}
                                /> */}

                                <div className="register__error-message">{error}</div>

                                <div className="register__btn">
                                    <button type="submit">Зареєструватися</button>
                                </div>

                                {/* Проверяем вошел ли пользователь */}
                                {isLoggedIn ? (
                                    <div className="register__successful-entry">
                                        <p type="submit">Ви успішно зареєструвалися</p>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Register