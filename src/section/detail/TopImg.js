import "./TopImg.scss";
import gradientBg from "../../assets/img/gradient_bg.png";
import { useState } from "react";
import CartPopup from "../../components/CartPopup";


const TopImg = ({ product ,onAdd }) => {
    const[isOpen,setIsOpen] = useState(false);
    if (!product) return null;
    
    const { title, price, description, model3D } = product;
    console.log("model3D =", model3D);
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price ?? 0);
    const descLines = (description ?? "").split("\n");
    const handlePayClick = () => {
        // if (isEmpty) return;
        setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);
    const handleClick = () => {
        onAdd?.(product);
        handlePayClick();
                };

    


    return (
        <section className="top_img">
            {/* 배경 */}
            <div
                // 배경 이미지
                className="top_img_bg"
                style={{
                    backgroundImage: `url(${gradientBg})`,
                }}
                />
            <div className="top_img_inner">
                {/* 3D 처리 */}
                <div className="top_img_left">
                    {model3D && (
<<<<<<< HEAD
                        <model-viewer
                        src={model3D}
                        camera-controls
                        auto-rotate
                        disable-zoom
                        style={{ width: "520px", height: "360px" }}
                        />
=======
                        <div className="model-wrap">
                            <model-viewer
                                src={model3D}
                                camera-controls
                                auto-rotate
                                disable-zoom
                                camera-orbit="0deg 60deg 3.2m"
                                min-camera-orbit="auto 45deg auto"
                                max-camera-orbit="auto 70deg auto"
                                camera-target="0m 0.1m 0m"
                                rotation-center="0m 0.1m 0m"
                                rotation-axis="y"
                                environment-image="neutral"
                                exposure="0.8"
                            />
                        </div>
>>>>>>> c49c6e277fd6d8c0895313e670edc7baa5998469
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
                    <button className="btn" onClick={handleClick}>
                        구매하기
                    </button>
                </div>
            
            </div>
                { isOpen &&(
                        <CartPopup onClose={handleClose}/>
                )}
        </section>
    );
};

export default TopImg;
