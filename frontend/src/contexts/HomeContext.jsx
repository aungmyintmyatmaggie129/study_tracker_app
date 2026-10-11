import { HomePageData, HomePaths, HomeSubjects } from '../const/index.js'
import { homeContext } from './home-context.js'

export function HomeContextProvider({ children }) {
    const value = {
        ...HomePageData,
        paths: HomePaths,
        subjects: HomeSubjects,
    }

    return <homeContext.Provider value={value}>{children}</homeContext.Provider>
}
