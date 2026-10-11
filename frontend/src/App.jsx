import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Subjects from './Pages/Subjects.jsx'
import Progress from './Pages/Progress.jsx'
import FocusTimer from './Pages/FocusTimer.jsx'
import Login from './Pages/Login.jsx'

export default function App() {
  const { pathname } = useLocation()
  const isLoginPage = pathname === '/'

  return (
    <div className="min-h-screen bg-lilac text-navy">
      {!isLoginPage && (
        <header className="rounded-b-[22px] bg-white px-5 py-6 sm:px-8 lg:px-12">
          <NavBar />
        </header>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/focus" element={<FocusTimer />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </div>
  )
}
