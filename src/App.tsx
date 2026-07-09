import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Algarve from './pages/Algarve'
import Lisbon from './pages/Lisbon'
import Porto from './pages/Porto'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algarve" element={<Algarve />} />
        <Route path="/lisbon" element={<Lisbon />} />
        <Route path="/porto" element={<Porto />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}
