import React, { useState } from 'react';
import SliderPhotos3 from '../sliders/slider-photos-3/SliderPhotos3';
import SliderHorizontal1 from '../sliders/slider-horizontal-1/SliderHorizontal1';

import Modal from '../modal/Modal';

import manufactureImg from './../../img/manufacturer/fmc.jpg'
import visaImg from './../../img/credit-card/visa.svg'
import mastercardImg from './../../img/credit-card/mastercard.svg'
import cashImg from './../../img/credit-card/cash.svg'

import './product.css';

const Product = () => {

    //* Tabs
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    //* Input
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    //* --- Модальное окно
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className='product'>
            <div className="container">
                <div className="product__container">
                    <div className="product__content">

                        <div className="product__basis">

                            <div className="product__basis-slider">
                                <SliderPhotos3 />
                            </div>

                            <div className="product__basis-company">

                                <div className="product__title">Гербіцид Комманд®, ФМС УКРАЇНА</div>

                                <div className="product__stock">В наявності</div>

                                <div className="product__company-delivery">

                                    <div className="product__company">

                                        <div className="product__company-title">Виробник</div>
                                        <div className="product__company-manufacturer">
                                            <img src={manufactureImg} alt="Manufacture" />
                                            <div className="product__company-manufacturer-text">ФМС Украина</div>
                                        </div>
                                        <div className="product__company-pay">Оплата</div>
                                        <img src={visaImg} alt="Visa" />
                                        <img src={mastercardImg} alt="Mastercard" />
                                        <img src={cashImg} alt="Cash" />
                                    </div>
                                    <div className="product__delivery">

                                        <div className="product__company-title">Доставка</div>
                                        <p>Завтра відповідно до тарифів перевізника</p>
                                        <div className="product__phone-btn">
                                            <button>Замовити дзвінок</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="product__price-buy">

                                    <div className="product__price">7814,63 грн</div>

                                    <div className="product__buy-btn" onClick={openModal}>
                                        <button>Купити</button>
                                    </div>

                                    {/* --- Модальное окно --- */}
                                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                                        {/* <h2>Заголовок модального окна</h2>
                                        <p>Содержимое модального окна...</p> */}
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        <div className="product__description">

                            <div className="product__description-tabs">

                                <div className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                                    onClick={() => toggleTab(1)}
                                >Опис</div>
                                <div className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                                    onClick={() => toggleTab(2)}
                                >Відгуки</div>
                            </div>

                            <div className="product__description-content">

                                {/* 1 */}
                                <div className={toggleState === 1 ? 'content active-content' : 'content'}>

                                    <h3>Генерал на полі</h3>
                                    <p>Генерал на полі. Досходовий гербіцид для боротьби з однорічними дводольними та деякими злаковими бур’янами в посівах ріпаку та інших культур.</p>
                                    <div className="product__span">

                                        <p><span>Діюча речовина:</span> Кломазон, 480 г/л</p>
                                        <p><span>Препаративна форма:</span> Концентрат емульсії</p>
                                        <p><span>Норма використання:</span> 0,2-0,6 л/га</p>
                                        <p><span>Клас токсичності:</span> 2.</p>
                                        <p><span>Термін зберігання:</span> 2 роки.</p>
                                    </div>

                                    <div className="product__character-recommend">

                                        <h3>Характеристики</h3>
                                        <p>Системний препарат потрапляє до рослини через гіпокотиль (підсім´ядольне колінце) та кореневу систему і рухається по ксилемі до листків;</p>
                                        <ul>
                                            <li>Проникаючи в рослину, припиняє процес утворення хлорофілу і каротину, тим самим зупиняє процес фотосинтезу;</li>
                                            <li>Знищує бур’яни та створює умови озимому ріпаку для доброго росту і розвитку в осінній період, усуваючи конкуренцію рослин за світло, вологу та поживні речовини на самих ранніх етапах органогенезу;</li>
                                            <li>Добре зв´язується у грунті та слабо промивається;</li>
                                            <li>Для комплексного захисту ріпаку зазвичай;</li>
                                            <li>Використовується у бакових сумішах із д.р. метазахлор та пропізохлор;</li>
                                            <li>В країнах Східної Європи (Чехія, Словаччина, Польща) використання Комманд® на посівах ріпаку є обов’язковим елементом в технології його вирощування;</li>
                                            <li>Широко використовується більше, ніж в 100 країнах світу на посівах ріпаку, сої, тютюну, перцю, моркви, картоплі, баштанних, бавовни та інших культур.</li>
                                        </ul>

                                        <h3>Рекомендації:</h3>
                                        <ul>
                                            <li>Для досягнення максимального ефекту потрібен якісний обробіток ґрунту: відсутність грудок, вирівняна поверхня поля, відсутність рослинних решток;</li>
                                            <li>Обприскування ґрунту проводиться впродовж двох днів, а найкраще відразу ж після посіву;</li>
                                            <li>За недостачі ґрунтової вологи після обприскування рекомендується провести коткування ґрунту кільчасто-шпоровими котками;</li>
                                            <li>Норма витрати залежить від вмісту гумусу в ґрунті, на малогумусних ґрунтах її можна дещо знизити;</li>
                                            <li>Може виникнути побіління першої пари листочків ріпаку, проте в подальшому воно зникає, а рослини мають більш розвинену кореневу систему, краще витримують низькі температури;</li>
                                            <li>За потреби пересіву через 30-60 днів після обробки ріпак та сою можна сіяти після поверхневого обробітку ґрунту на глибину 8-10 см, для всіх інших культур рекомендується провести глибоку оранку;</li>
                                            <li>Обов´язковою вимогою під час внесення препарату є забезпечення суцільного покриття поверхні поля.</li>
                                        </ul>
                                    </div>

                                </div>

                                {/* 2 */}
                                <div className={toggleState === 2 ? 'content active-content' : 'content'}>

                                    <div className="product__name-email">

                                        <div className="product__input-1">

                                            <div className={`input-container ${name ? 'filled' : ''}`}>
                                                <input type="text" value={name} onChange={handleNameChange} />
                                                <span>Ім’я</span>
                                            </div>
                                        </div>
                                        <div className="product__input-2">

                                            <div className={`input-container ${email ? 'filled' : ''}`}>
                                                <input type="email" value={email} onChange={handleEmailChange} />
                                                <span>Пошта</span>
                                            </div>
                                        </div>


                                    </div>


                                    <div className="product__input-3">
                                        <div className={`input-container ${review ? 'filled' : ''}`}>
                                            <textarea value={review} onChange={handleReviewChange} />
                                            <span>Відгук</span>
                                        </div>
                                    </div>

                                    <div className="product__feedback-btn">
                                        <button>Додати відгук</button>
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

export default Product