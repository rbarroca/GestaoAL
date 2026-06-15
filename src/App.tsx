import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Algarve from './pages/Algarve'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algarve" element={<Algarve />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
