import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";
import products from "../assets/data/products.json";



const ProductCard = () => {
    const navigate = useNavigate();
    const handleDetail = ()=>{
        navigate(`/detail:id`);
    }
    return (
        <section className="product" onClick={handleDetail}>
           <div className="product-card">
            {/* 크롬 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={chromeFront} alt="" />
                          <img className="hover" src={chrome02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">CHROME HEAVEN</p>
                          <p className="price">￦ 1,245,000 </p>
                      </div>
                  </div>
              </div>
              {/* 벨로라 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={VeloraFront} alt="" />
                          <img className="hover" src={Velora02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">VELORA DEEP</p>
                          <p className="price">￦ 1,320,000</p>
                      </div>
                  </div>
              </div>
              {/* 레트로 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={RetroFront} alt="" />
                          <img className="hover" src={Retro02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">RETRO CURRENT</p>
                          <p className="price">￦ 1,180,000</p>
                      </div>
                  </div>
              </div>
              {/* 베일 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={VeilFront} alt="" />
                          <img className="hover" src={Veil02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">VEIL</p>
                          <p className="price">￦ 1,090,000</p>
                      </div>
                  </div>
              </div>
              {/* 미드나잇 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={MidFront} alt="" />
                          <img className="hover" src={Mid02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">MIDNIGHT</p>
                          <p className="price">￦ 1,390,000</p>
                      </div>
                  </div>
              </div>
              {/* 모스 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={MossFront} alt="" />
                          <img className="hover" src={Moss02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">MOSS</p>
                          <p className="price">￦ 1,150,000</p>
                      </div>
                  </div>
              </div>
              {/* 스틸 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={StillFront} alt="" />
                          <img className="hover" src={Still02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">STILL</p>
                          <p className="price">￦ 1,210,000</p>
                      </div>
                  </div>
              </div>
              {/* 클라우드 */}
              <div className="inner-card">
                  <div className="card">
                      <div className="thumb">
                          <img className="base" src={CloudFront} alt="" />
                          <img className="hover" src={Cloud02} alt="" />
                      </div>
                      <div className="info">
                          <p className="name">CLOUD</p>
                          <p className="price">￦ 1,245,000</p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default ProductCard;
