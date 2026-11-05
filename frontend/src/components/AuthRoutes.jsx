import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../contexts/useAuthContext.js'

function SessionLoading() {
    return <p className="p-8 text-center" role="status">Checking your session...</p>
}

function SessionError() {
    const { checkSession } = useAuthContext()

    return (
        <main className="p-8 text-center" role="alert">
            <p>Unable to verify your session. Check your connection and try again.</p>
            <button className="mt-4 underline" type="button" onClick={checkSession}>Try again</button>
        </main>
    )
}

export function RequireAuth({ children }) {
    const { status } = useAuthContext()
    const location = useLocation()

    if (status === 'checking') return <SessionLoading />
    if (status === 'error') return <SessionError />
    if (status !== 'authenticated') {
        return <Navigate to="/" replace state={{ from: location }} />
    }

    return children
}

export function RequireGuest({ children }) {
    const { status } = useAuthContext()

    if (status === 'checking') return <SessionLoading />
    if (status === 'error') return <SessionError />
    if (status === 'authenticated') return <Navigate to="/home" replace />

    return children
}
