import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NavBar from './components/NavBar.jsx'

function Placeholder({ title }) {
  return (
    <div className="min-h-screen bg-[#f8f7fb] p-8 text-navy">
      <NavBar />
      <h1 className="mt-12 text-3xl">{title}</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
      <Route path="/subjects" element={<Placeholder title="Subjects" />} />
      <Route path="/progress" element={<Placeholder title="Progress" />} />
    </Routes>
  )
}
