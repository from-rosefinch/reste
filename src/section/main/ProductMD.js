import mdImg from "../../assets/img/Midnight_05.png";
import "./ProductMD.scss";
import { Link } from "react-router-dom";

const ProductMD = () => {
  return (
    <section className="product-md">
      <div className="product-description">
        <div className="product-detail">
          <img src={mdImg} alt="미드나잇 소파" />
          <div className="product-txt">
            <h3>MidNight</h3>
            <p>
              풍부한 볼륨과 유연한 가죽 주름으로 <br />편안함을 직관적으로 전달
            </p>
            <h4>￦ 1,390,000</h4>
            <Link to={`/detail/midnight`}>
              <button>구매하기</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMD;
