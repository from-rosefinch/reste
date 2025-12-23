const MainVideo = () => {
  return (
    <section className="main-video">
      <div className="video-wrap">
        <video
          src="../../Reste.webm"
          poster="../../Reste-poster"
          autoPlay
          muted
          loop
        />
        <img
          src="../../Reste."
        />
      </div>
    </section>
  )
}

export default MainVideo