import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import PlaceDetail from './pages/PlaceDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App