import TopImg from "../section/detail/TopImg";
import TopBgDark from "../section/detail/TopBgDark";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import { useParams } from "react-router-dom";
import products from "../assets/data/productsdetail.json";


const DETAIL_LAYOUT_MAP = {
    cloud: [TopImg, DetailContents],
    velora: [TopBgDark,RemoveImg, DetailContents],
    "retro-current": [TopBgDark, DetailContents],
    veil: [TopBgDark, DetailContents],
    midnight: [TopImg, RemoveImg, DetailContents],
    "chrome-haven": [TopImg, DetailContents],
    moss: [TopImg, DetailContents],
    still: [TopImg, DetailContents],
};


const DetailPage = () => {
  
    const { id } = useParams();

    // 1차 방어
    if (!id) return <div>잘못된 접근임</div>;

    const safeId = id.toLowerCase();

    const product = products.find(
      (item) => item.id.toLowerCase() === safeId
      
    );
    

    if (!product) return <div>{safeId} 페이지 없음</div>;

    const Layout = DETAIL_LAYOUT_MAP[safeId];
    if (!Layout) return <div>페이지 구성 없음</div>;

    return (
        <div id="detail-page" className={`detail ${safeId}`}>
            {Layout.map((Component, index) => (
                <Component key={index} product={product} />
            ))}
        </div>
    );
};

export default DetailPage;
