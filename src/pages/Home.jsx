import { useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PlaceCard from '../components/PlaceCard'
import { places } from '../data/places'

export default function Home() {
  const listRef = useRef(null)

  const handleExplore = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Header />
      <section id="home">
        <Hero onExplore={handleExplore} />
      </section>

      <main ref={listRef} className="places-section" id="about">
        <h2 className="section-title">Destinasi Wisata Populer</h2>
        <div className="places-grid">
          {places.map(place => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
      </main>

      {/* Contoh section lain agar anchor navbar bekerja */}
      <section id="portfolio" style={{ padding: '4rem 1rem' }}>
        <h2 className="section-title">Portfolio</h2>
        <p style={{ color: 'var(--text-muted)' }}>Konten portfolio di sini…</p>
      </section>

      <section id="contact" style={{ padding: '4rem 1rem' }}>
        <h2 className="section-title">Contact</h2>
        <p style={{ color: 'var(--text-muted)' }}>Kontak / form di sini…</p>
      </section>
    </>
  )
}