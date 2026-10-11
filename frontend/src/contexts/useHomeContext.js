import { useContext } from 'react'
import { homeContext } from './home-context.js'

export function useHomeContext() {
    const context = useContext(homeContext)

    if (!context) {
        throw new Error('useHomeContext must be used within a HomeContextProvider')
    }

    return context
}
