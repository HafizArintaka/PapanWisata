/* Hero Section Component */
function Hero({ onExplore }) {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-white px-3">
          ꦱꦸꦒꦺꦤ꧀ꦒ꧀ꦫꦮꦸꦃꦮꦺꦴꦤ꧀ꦠꦺꦤ꧀ꦲꦶꦤ꧀ꦒ꧀ꦱꦶꦠꦸꦱ꧀
        </h1>
        <span className="accent font-jawa block mt-3 text-4xl sm:text-5xl md:text-6xl pb-15 mt-8">ꦤꦸꦱꦤ꧀ꦠꦫ</span>
        <p className="hero-subtitle  px-4 sm:px-7 mt-4 text-base sm:text-lg md:text-xl">
          Ingkang kinurmatan para rawuh sedaya,
          anthi bingah, kula nyuwun pirsa bilih situs punika kapratelak kanggé paring katrangan lan pituduh bab papan wisata éndah ing Ngayogyakarta. Jogja punika dudu namung kutha, nanging ugi budaya, rasa, lan kenangan ing saben sudhutipun.

        </p>
        <button onClick={onExplore} className="explore-btn">
          ꧋ꦱꦸ​ꦒꦼꦁ​ꦩꦶꦂ​ꦱ​ꦤꦶ​
        </button>
      </div>
    </header>
  )
}

export default Hero