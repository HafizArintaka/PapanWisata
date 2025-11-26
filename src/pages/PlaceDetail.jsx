import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { places } from '../data/places'
import '../index.css'

export default function PlaceDetail() {
  const { id } = useParams()
  const place = places.find(p => String(p.id) === String(id))
  const [md, setMd] = useState('')

  useEffect(() => {
    if (place && place.markdown) {
      fetch(`/content/places/${place.markdown}`)
        .then(res => {
          if (!res.ok) throw new Error('Markdown not found')
          return res.text()
        })
        .then(text => setMd(text))
        .catch(() => setMd('# Konten tidak ditemukan\nMohon periksa file markdown.'))
    } else {
      setMd('# Destinasi tidak ditemukan\nID destinasi tidak valid.')
    }
  }, [place])

  if (!place) {
    return (
      <main className="places-section">
        <h2 className="section-title">Destinasi Tidak Ditemukan</h2>
        <p style={{ color: 'var(--text-muted)' }}>Tidak ada destinasi dengan ID tersebut.</p>
        <Link to="/" className="detail-btn" style={{ marginTop: '1rem' }}>
          Kembali
        </Link>
      </main>
    )
  }

  return (
    <main className="places-section" style={{ alignItems: 'flex-start' }}>
      <Link to="/" className="detail-btn" style={{ marginBottom: '1rem' }}>
        ← Kembali
      </Link>

      <article className="place-detail">
        <div className="detail-image-wrapper">
          <img src={place.image} alt={place.name} />
        </div>

        <div className="detail-content" style={{ maxWidth: 900 }}>
          <h1 style={{ marginTop: '1rem' }}>{place.name}</h1>
          <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.6px' }}>
            {place.location}
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {md}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  )
}