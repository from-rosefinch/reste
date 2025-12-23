import "./ProductCard.scss";

// 크롬 사진
import chromeFront from "../assets/img/CHROME_HAVEN_front.png";
import chrome02 from "../assets/img/CHROME_HAVEN_02.png";
// 벨로라 사진
import VeloraFront from "../assets/img/Velora_front.png";
import Velora02 from "../assets/img/Velora_01.png";
// 레트로 사진
import RetroFront from "../assets/img/RETRO_CURRENT_front.png";
import Retro02 from "../assets/img/RETRO_CURRENT_03.png";
// 베일 사진
import VeilFront from "../assets/img/Veil_front.png";
import Veil02 from "../assets/img/Veil_02.png";
// 미드나잇 사진
import MidFront from "../assets/img/Midnight_front.png";
import Mid02 from "../assets/img/Midnight_05.png";
// 모스 사진
import MossFront from "../assets/img/Moss_front.png";
import Moss02 from "../assets/img/Moss_03.png";
// 스틸 사진
import StillFront from "../assets/img/Still_front.png";
import Still02 from "../assets/img/Still_02.png";
// 클라우드 사진
import CloudFront from "../assets/img/Cloud_front.png";
import Cloud02 from "../assets/img/Cloud_04.png";



const ProductCard = () => {
    return (
        <section className="product">
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
