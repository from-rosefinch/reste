import React from "react";
import TopImg from "../section/detail/TopImg";
import RemoveImg from "../section/detail/RemoveImg";
import DetailContents from "../section/detail/DetailContents";

const DetailPageDark = () => {
    return (
        <div className="detail-page-dark">
            <TopImg />
            <RemoveImg />
            <DetailContents />
        </div>
    );
};

export default DetailPageDark;
