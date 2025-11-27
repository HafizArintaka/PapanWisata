import { useRef } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PlaceCard from '../components/PlaceCard'
import Contact from '../components/Contact'
import TeamSection from './TeamSection'
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

      {/* Team Section di sini */}
      <TeamSection />

      {/* Contact Section */}
      <Contact />
    </>
  )
}