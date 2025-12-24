import { useEffect, useRef } from 'react'
import './BestItem.scss'

const BestItem = () => {
  const trackRef = useRef(null)
  const indexRef = useRef(0)

  /**
   * 1. 원본 이미지 배열
   * - 여기서만 이미지 개수를 관리
   */
  const images = [...Array(6)].map(
    (_, i) => `/images/가구이름_0${i + 1}.jpg`
  )

  /**
   * 1. JSX에서 복제까지 포함한 슬라이드 배열 생성
   * - 마지막에 images[0]을 추가 → 복제
   */
  const slides = [...images, images[0]]

  useEffect(() => {
    const track = trackRef.current
    const slideWidth = track.children[0].offsetWidth

    const moveSlide = () => {
      indexRef.current += 1

      track.style.transition = 'transform 1s ease'
      track.style.transform = `translateX(-${slideWidth * indexRef.current}px)`

      /**
       * 33. 복제 슬라이드(마지막)에 도달했을 때
       * → transition 제거 후 처음으로 순간 이동
       */
      if (indexRef.current === images.length) {
        setTimeout(() => {
          track.style.transition = 'none'
          track.style.transform = 'translateX(0)'
          indexRef.current = 0
        }, 1000)
      }
    }

    const interval = setInterval(moveSlide, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="best-item">
      <div className="banner">
        {/* 상단 그라데이션 오버레이 */}
        <div className="banner_gradient" />

        <div className="banner_viewport">
          <ul className="banner_track" ref={trackRef}>
            {slides.map((src, idx) => (
              <li className="banner_slide" key={idx}>
                <img src={src} alt={`best item ${idx + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BestItem