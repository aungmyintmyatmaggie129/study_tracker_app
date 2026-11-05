import { useContext } from 'react'
import { authContext } from './auth-context.js'

export function useAuthContext() {
    const context = useContext(authContext)

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider')
    }

    return context
}
