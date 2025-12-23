import "./ProductCard.scss";

import products from "../assets/data/products.json";



const ProductCard = () => {
    return (
        <section className="product">
            <div className="product-card">
                {products.map((item, idx) => (
                    <div className="inner-card" key={idx}>
                        <div className="card">
                            <div className="thumb">
                                <img
                                    className="base"
                                    src={require(`../assets/img/${item.image}`)}
                                    alt={item.name}
                                />
                                <img
                                    className="hover"
                                    src={require(`../assets/img/${item.hover}`)}
                                    alt={item.name}
                                />
                            </div>

                            <div className="info">
                                <p className="name">{item.title}</p>
                                <p className="price">￦{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCard;
