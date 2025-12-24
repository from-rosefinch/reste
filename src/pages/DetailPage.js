import TopImg from "../section/detail/TopImg";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
const DetailPage = ({ onAdd }) => {
   
  return (
    <div id="detail-page">
      <TopImg onAdd={onAdd}/>
      <RemoveImg />
      <DetailContents />
    </div>
  )
}

export default DetailPage