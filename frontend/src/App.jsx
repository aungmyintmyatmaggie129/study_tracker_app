import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Subjects from './Pages/Subjects.jsx'
import Progress from './Pages/Progress.jsx'
import FocusTimer from './Pages/FocusTimer.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { RequireAuth, RequireGuest } from './components/AuthRoutes.jsx'
import { useAuthContext } from './contexts/useAuthContext.js'

export default function App() {
  const { pathname } = useLocation()
  const { status } = useAuthContext()
  const isAuthPage = pathname === '/' || pathname === '/register'
  const isAuthenticated = status === 'authenticated'

  return (
    <div className="min-h-screen bg-lilac text-navy">
      {!isAuthPage && (
        <header className="rounded-b-[22px] bg-white px-5 py-6 sm:px-8 lg:px-12">
          <NavBar />
        </header>
      )}
      <Routes>
        <Route path="/" element={<RequireGuest><Login /></RequireGuest>} />
        <Route path="/register" element={<RequireGuest><Register /></RequireGuest>} />
        <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/subjects" element={<RequireAuth><Subjects /></RequireAuth>} />
        <Route path="/focus" element={<RequireAuth><FocusTimer /></RequireAuth>} />
        <Route path="/progress" element={<RequireAuth><Progress /></RequireAuth>} />
        <Route path="*" element={<Navigate to={isAuthenticated ? '/home' : '/'} replace />} />
      </Routes>
    </div>
  )
}
