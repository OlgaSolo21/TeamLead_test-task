export function ButtonOrder() {
    const scrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            history.pushState({}, '', elementId);
        }
    };

    return (
        <button type="button" className="button" onClick={(e) => {
            e.preventDefault();
            scrollTo('orderForm');
        }}>
            Заказать
        </button>
    );
}