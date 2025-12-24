import React from "react";
import LightRays from "./LightRays";
import "./TopBgDark.scss";

const TopBgDark = ({ product, onBuy }) => {
    if (!product) return null;

    const { title, price, description, model3D } = product;
    const formattedPrice = new Intl.NumberFormat("ko-KR").format(price ?? 0);
    const descLines = (description ?? "").split("\n");

    return (
        <section
            className="top_img_dark"
            style={{
                position: "relative",
                height: "600px",
                overflow: "hidden",
            }}
        >
            {/* 🔽 배경 (풀폭, 제일 아래) */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100vw",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#dcdcdc"
                    raysSpeed={1.2}
                    lightSpread={1}
                    rayLength={1.4}
                    followMouse={false}
                    noiseAmount={0.08}
                    distortion={0.04}
                />
            </div>

            {/* 🔼 콘텐츠 */}
            <div
                className="top_img_inner"
                style={{
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div
                    className="top_img_left"
                    style={{ position: "relative", zIndex: 20 }}
                >
                    {model3D && (
                        <model-viewer
                            src={model3D}
                            camera-controls
                            auto-rotate
                            disable-zoom
                            exposure="1.4"
                            environment-image="neutral"
                            shadow-intensity="1"
                            style={{ width: "520px", height: "360px" }}
                        />
                    )}
                </div>

                <div
                    className="top_img_right_dark"
                    style={{ position: "relative", zIndex: 20 }}
                >
                    <h2 className="top_img_title">{title}</h2>

                    <p className="top_img_desc_dark">
                        {descLines.map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>

                    <div className="price_dark">₩ {formattedPrice}</div>

                    <button
                        className="btn_dark"
                        onClick={() => onBuy?.(product)}
                    >
                        구매하기
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopBgDark;
