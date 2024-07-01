import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import {data} from "../../utils/data.js"
import {useState} from "react";

export function Feedback () {
    const [reviews] = useState(data)

    const settings = {
        infinite: true,
        dots: !useMediaQuery({ query: '(max-width: 930px)' }),
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="section">
            <h2 className="feedback">Отзывы о продукте</h2>
            <Slider {...settings}>
                {reviews.map((item) => (
                    <div key={item.id} className="feedback__carousel">
                        <img className="feedback__img"
                            src={item.img}
                            alt="фото автора"
                        />
                        <h2 className="feedback__title">{item.name}</h2>
                        <p className="feedback__subtitle">{item.review}</p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}