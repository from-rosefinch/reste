import "./TopImg.scss";

const TopImg = ({ product, onBuy }) => {
    if (!product) return null;
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(product.price);

    return (
        <section
            className="top_img"
            style={{ backgroundImage: `url(${product.heroBg})` }}
        >
            <div className="top_img_inner">
                <div className="top_img_left">
                    <img
                        className="top_img_product"
                        src={product.product3d}
                        alt={product.title}
                    />
                </div>

                <div className="top_img_right">
                    <h2 className="top_img_title">{product.title}</h2>

                    <p className="top_img_desc">
                        {product.desc?.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    <div className="price">₩ {formattedPrice}</div>

                    <button className="btn" type="button" onClick={onBuy}>
                        구매하기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopImg;
