import prod from "../../assets/prod.png"
import video from "../../assets/video.mp4"
import {ButtonOrder} from "../ButtonOrder/ButtonOrder.jsx";

const mockData = 'Характеристика продукта — это отличительное свойство товара, ' +
    'которое формирует его привлекательность для потребителя.'

export function Promo () {

    return (
        <section className="promo">
            <video className="promo__video" src={video}
                   muted={true} autoPlay={true} loop/>
            <h1 className="promo__title">LevelUp</h1>
            <img src={prod} alt="Фото товара" className="promo__img"/>
            <ul className="promo__description">
                <li className="promo__info">Характеристика 1
                    <p className="promo__info-description">{mockData}</p>
                </li>
                <li className="promo__info">Характеристика 2
                    <p className="promo__info-description">{mockData}</p>
                </li>
                <li className="promo__info">Характеристика 3
                    <p className="promo__info-description">{mockData}</p>
                </li>
                <ButtonOrder/>
            </ul>
        </section>
    )
}