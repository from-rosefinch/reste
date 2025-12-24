import "./TopImg.scss";
import gradientBg from "../../assets/img/gradient_bg.png";
console.log("bg img =", gradientBg);

const TopImg = ({ product, onBuy }) => {
    if (!product) return null;

    const { title, price, description, model3D } = product;
    console.log("model3D =", model3D);
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price ?? 0);
    const descLines = (description ?? "").split("\n");

    return (
        <section className="top_img">
            {/* 배경 */}
            <div
                className="top_img_bg"
                style={{
                    backgroundImage: `url(${gradientBg})`,
                }}
            />
            <div className="top_img_inner">
                <div className="top_img_left">
                    {model3D && (
                        <model-viewer
                            src={model3D}
                            camera-controls
                            auto-rotate
                            disable-zoom
                            style={{ width: "520px", height: "360px" }}
                        />
                    )}
                </div>

                <div className="top_img_right">
                    <h2 className="top_img_title">{title}</h2>
                    <p className="top_img_desc">
                        {descLines.map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    <div className="price">₩ {formattedPrice}</div>
                    <button className="btn" onClick={() => onBuy?.(product)}>
                        구매하기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopImg;
