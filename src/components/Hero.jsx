/* Hero Section Component */
function Hero({ onExplore }) {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          Temukan Keindahan <span className="accent">Nusantara</span>
        </h1>
        <p className="hero-subtitle">
          Dari pegunungan hijau hingga pantai tropis – semua menunggu untuk kamu jelajahi.
        </p>
        <button onClick={onExplore} className="explore-btn">
          Explore
        </button>
      </div>
    </header>
  )
}

export default Hero