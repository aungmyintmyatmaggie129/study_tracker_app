import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Subjects from './Pages/Subjects.jsx'
import Progress from './Pages/Progress.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-lilac text-navy">
      <header className="rounded-b-[22px] bg-white px-5 py-6 sm:px-8 lg:px-12">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </div>
  )
}
