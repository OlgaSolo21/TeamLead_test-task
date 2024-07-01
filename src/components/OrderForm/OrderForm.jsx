import {useEffect, useState} from "react";
import prod from "../../assets/prod.png";

export function OrderForm() {

    const [timeLeft, setTimeLeft] = useState(1800); // 30 мин
    let startTime;
    function handleTimer() {
        if (startTime) {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
            if (timeLeft <= 0) {
                setTimeLeft(1800);
                startTime = new Date().getTime();
            }
        } else {
            startTime = new Date().getTime();
        }
    }
    useEffect(() => {
        const interval = setInterval(() => handleTimer(), 1000);
        return () => clearInterval(interval);
    }, []);

    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const phoneInput = document.querySelector('#tel');
        phoneInput.addEventListener('input', function() {
            const pattern = /^[0-9]+$/;
            if (!pattern.test(this.value)) {
                setError(true);
                this.value = this.value.replace(/[^0-9]/g, '');
            } else {
                setError(false);
            }
        });
    }, []);

    return (
        <section className="section">
            <h2 className="promo__title">LevelUp</h2>
            <div className="orderForm">
                <span className="orderForm__timer">{Math.floor(timeLeft / 60)}</span>
                <p className="orderForm__title">минут</p>
                <span className="orderForm__timer">{timeLeft % 60}</span>
                <p className="orderForm__title">секунд</p>
            </div>
            <div className="price">
                <span className="old-price">Старая цена: 100 руб.</span>
                <br/>
                <span className="new-price">Новая цена: 80 руб.</span>
            </div>
            <div className="orderForm__info" id="orderForm">
                <form className="orderForm__form">
                    <h2 className="feedback__title">Форма заказа</h2>
                    <div className="orderForm__order">
                        <input
                            id="name"
                            placeholder="Введите ваше имя"
                            className="orderForm__input"
                            type="text"
                            name="name"
                        />
                        <label htmlFor="name" className="orderForm__label">Например, Анна</label>
                    </div>
                    <div className="orderForm__order">
                        <input
                            id="tel"
                            placeholder="Телефон"
                            className="orderForm__input"
                            type="text"
                            name="phone"
                            value={value || ''} onChange={(e) => setValue(e.target.value)}/>
                        {error && <span className="error">Пожалуйста, введите только цифры.</span>}
                        <label htmlFor="tel" className="orderForm__label">Формат 79774441100</label>
                    </div>
                    <button type="button" className="button">Заказать</button>
                </form>
                <img src={prod} alt="Фото товара" className="prod__img"/>
            </div>
        </section>
    )
}