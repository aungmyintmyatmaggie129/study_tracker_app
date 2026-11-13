import { useCallback, useEffect, useMemo, useReducer } from 'react'
import axios from 'axios'
import { authContext } from './auth-context.js'

const apiBaseUrl = import.meta.env.VITE_API_URL
const usersUrl = `${apiBaseUrl.replace(/\/$/, '')}/api/users`

const initialState = {
    status: 'checking',
    user: null,
}

function authReducer(state, action) {
    switch (action.type) {
        case 'authenticated':
            return { status: 'authenticated', user: action.user }
        case 'unauthenticated':
            return { status: 'unauthenticated', user: null }
        case 'error':
            return { status: 'error', user: null }
        case 'checking':
            return { status: 'checking', user: null }
        default:
            return state
    }
}

export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const checkSession = useCallback(async () => {
        dispatch({ type: 'checking' })
        try {
            const response = await axios.get(`${usersUrl}/me`, { withCredentials: true })
            dispatch({ type: 'authenticated', user: response.data.user })
        } catch (error) {
            if (error.response?.status === 401) {
                dispatch({ type: 'unauthenticated' })
                return
            }
            dispatch({ type: 'error' })
        }
    }, [])

    useEffect(() => {
        checkSession()
    }, [checkSession])

    const login = useCallback(async (credentials) => {
        const response = await axios.post(`${usersUrl}/login`, credentials, { withCredentials: true })
        dispatch({ type: 'authenticated', user: response.data.user })
    }, [])

    const authenticate = useCallback((user) => {
        dispatch({ type: 'authenticated', user })
    }, [])

    const value = useMemo(() => ({
        ...state,
        isAuthenticated: state.status === 'authenticated',
        login,
        authenticate,
        checkSession,
    }), [state, login, authenticate, checkSession])

    return <authContext.Provider value={value}>{children}</authContext.Provider>
}
