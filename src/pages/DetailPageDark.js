import React from "react";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";
import TopImgDark from "../section/detail/TopImgDark";

const DetailPageDark = () => {
    return (
        <div className="detail-page-dark">
            <TopImgDark />
            <RemoveImg />
            <DetailContents />
        </div>
    );
};

export default DetailPageDark;
