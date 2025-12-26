import "./DetailContents.scss"

const DetailContent = ({ product }) => {
    if (!product?.detailPoster) return null;

    return (
        <section className="detail-contents">
            <div className="detail-contents_inner poster">
                <img
                    src={product.detailPoster}
                    alt={`${product.title} 상세 이미지`}
                />
            </div>
        </section>
    );
};

export default DetailContent;
