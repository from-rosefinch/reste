import "./RemoveImg.scss"

const RemoveImg = () => {
  const trackRef = useRef(null);

  const state = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });
  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    state.current.isDown = true;
    state.current.moved = false;
    state.current.startX = e.clientX;
    state.current.startScrollLeft = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !state.current.isDown) return;
    const dx = e.clientX - state.current.startX;
    if (Math.abs(dx) > 4) state.current.moved = true;
    el.scrollLeft = state.current.startScrollLeft - dx;
  };

  const endDrag = () => {
    const el = trackRef.current;
    state.current.isDown = false;
    el?.classList.remove("is-dragging");
  };

  // 드래그 했을 때 카드 클릭/드래그 선택 방지용
  const onClickCapture = (e) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return (
    <section className="detail_cut">
      <div className="detail_cut_head">
        <h3 className="detail_cut_title">Detail Cut</h3>
      </div>
      <div className="detail_cut_viewport">
        <div className="detail_cut_track" role="list"
          ref={trackRef} 
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
          >
          {detailCuts.map((it) => (
            <article className="detail_card" key={it.id} role="listitem">
              <div className="detail_card_media">
                <img className="img_base" src={it.base} alt={it.alt} loading="lazy" />
                <img className="img_hover" src={it.hover} alt="" aria-hidden="true" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemoveImg;
