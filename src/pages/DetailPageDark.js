import React from "react";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import TopImgDark from "../section/detail/TopImgDark";

const DetailPageDark = ({onAdd}) => {
    return (
        <div className="detail-page-dark">
            <TopImgDark onAdd={onAdd}/>
            <RemoveImg />
            <DetailContents />
        </div>
    );
};

export default DetailPageDark;
