import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Algarve from './pages/Algarve'
import Lisbon from './pages/Lisbon'
import Porto from './pages/Porto'
import ThankYou from './pages/ThankYou'
import BlogIndex from './blog/BlogIndex'
import HowToFindPropertyManagerAlgarve from './blog/posts/how-to-find-property-manager-algarve'
import ScrollManager from './components/ScrollManager'

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algarve" element={<Algarve />} />
        <Route path="/lisbon" element={<Lisbon />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route
          path="/blog/how-to-find-property-manager-algarve"
          element={<HowToFindPropertyManagerAlgarve />}
        />
        {/* Artigos futuros adicionados aqui com o mesmo padrão */}
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}
