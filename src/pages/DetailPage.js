import TopImg from "../section/detail/TopImg";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import { useParams } from "react-router-dom";
import products from "../assets/data/products.json";
import "./Detail.scss";

const DETAIL_LAYOUT_MAP = {
    cloud: [TopImg, DetailContents],
    velora: [TopImg, RemoveImg, DetailContents],
    "retro-current": [TopImg, DetailContents],
    veil: [TopImg, DetailContents],
    midnight: [TopImg, RemoveImg, DetailContents],
    "chrome-haven": [TopImg, DetailContents],
    moss: [TopImg, DetailContents],
    still: [TopImg, DetailContents],
};

const DetailPage = () => {
  
    const { id } = useParams();
    const safeId = id.toLowerCase();

    const product = products.find(
      (item) => item.id.toLowerCase() === safeId
      
    );
    

    if (!product) return <div>{id} 페이지 없음</div>;

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
