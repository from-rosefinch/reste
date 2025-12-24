import "./TopImg.scss";
import productDetails from "../../assets/data/productsdetail.json";
import TopBg from "../../assets/img/gradient_bg.png";
import chromeModel from "../../assets/img/CHROME_HAVEN.glb";

const TOP_ASSET_MAP = {
  "chrome-haven": {
    topBg: TopBg,
    model3D: chromeModel,
  },
};
const TopImg = ({ productId = "chrome-haven", onBuy }) => {
  const data = productDetails.find((p) => p.id === productId);
  if (!data) return null;
  const assets = TOP_ASSET_MAP[productId] || {};
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(data.price ?? 0);
  const descLines = (data.description ?? "").split("\n");

  const handleBuy = () => {
    if (onBuy) onBuy(data);
    else console.log("구매하기:", data.id);
  };

  return (
    <section
      className="top_img"
      style={assets.topBg ? { backgroundImage: `url(${assets.topBg})` } : undefined}
    >
      <div className="top_img_inner">
        <div className="top_img_left">
          <model-viewer
            src={assets.model3D}
            camera-controls
            auto-rotate
            disable-zoom
            style={{ width: "520px", height: "360px" }}
          />
        </div>
        <div className="top_img_right">
          <h2 className="top_img_title">{data.title}</h2>
          <p className="top_img_desc">
            {descLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="price">₩ {formattedPrice}</div>
          <button className="btn" type="button" onClick={handleBuy}>
            구매하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopImg;
