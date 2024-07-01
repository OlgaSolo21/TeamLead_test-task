import doctor from "../../assets/doctor.png"
import {ButtonOrder} from "../ButtonOrder/ButtonOrder.jsx";

export function ProductPromo() {
    return (
        <section className="section">
            <h2 className="feedback">Информация о продукте</h2>
            <div className="productPromo__content">
                <img src={doctor} alt="фото человека с продуктом" className="productPromo__img"/>
                <p className="productPromo__description">
                    БАДы — это биологически активные добавки к пище, которые содержат вещества,
                    необходимые для поддержания здоровья и хорошего самочувствия.
                    Они могут быть полезны для профилактики заболеваний, укрепления иммунитета
                    и повышения общего тонуса организма.
                    <br/>
                    БАДы — это биологически активные добавки к пище, которые содержат вещества,
                    необходимые для поддержания здоровья и хорошего самочувствия.
                    Они могут быть полезны для профилактики заболеваний, укрепления иммунитета
                    и повышения общего тонуса организма.
                </p>
            </div>
            <ul className="productPromo__property">
                <li className="property">Укрепление иммунитета</li>
                <li className="property">Поддержка нервной системы</li>
                <li className="property">Помощь в борьбе со стрессом</li>
            </ul>
            <ButtonOrder/>
        </section>
    )
}