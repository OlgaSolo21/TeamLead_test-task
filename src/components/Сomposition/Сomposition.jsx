import prod from "../../assets/prod.png"
import ingrid1 from "../../assets/ingr1.avif"
import ingrid2 from "../../assets/ingr2.avif"
import ingrid3 from "../../assets/ingr3.avif"

export function Composition() {
    return (
        <section className="composition">
            <h2 className="composition__title">Состав продукта</h2>
            <div className="content">
                <div className="content__ingredient">
                    <img src={ingrid1} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
                <div className="content__ingredient">
                    <img src={ingrid2} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
                <div className="content__ingredient">
                    <img src={ingrid3} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
            </div>
            <img src={prod} alt="Фото товара" className="composition__img"/>
            <div className="content">
                <div className="content__ingredient">
                    <img src={ingrid3} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
                <div className="content__ingredient">
                    <img src={ingrid2} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
                <div className="content__ingredient">
                    <img src={ingrid1} className="content__img" alt="фото ингредиента"/>
                    <p className="content__title">Ингредиент продукта</p>
                </div>
            </div>
        </section>
    )
}