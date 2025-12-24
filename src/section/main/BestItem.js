import './BestItem.scss'

const BestItem = () => {

  return (
    <section className="best-item-section">
      {/* 이미지 슬라이드 */}
      <div className="container">
        <Swiper
          slidesPerView={"auto"}   // CSS에서 지정한 너비 사용
          spaceBetween={0}        // 슬라이드 간격
          freeMode={true}          // 부드러운 관성 스크롤
          mousewheel={true}        // 마우스 휠 지원
          grabCursor={true}        // 마우스 커서 변경
          modules={[FreeMode, Mousewheel]} 
          className="best-item-swiper"
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id} className="best-item-slide">
              <div className="img-box">
                <img src={item.img} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 버튼 */}
      <Link to={`/product`}>
        <button>자세히 보기</button>
      </Link>
    </section>
  );
};

export default BestItem;