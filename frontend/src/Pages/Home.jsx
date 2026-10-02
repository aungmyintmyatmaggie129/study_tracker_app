import ContinueLearning from '../components/ContinueLearning.jsx'
import HomeHero from '../components/HomeHero.jsx'
import RecommendedPaths from '../components/RecommendedPaths.jsx'
import SubjectSection from '../components/SubjectSection.jsx'
import { HomeContextProvider } from '../contexts/HomeContext.jsx'

function HomeContent() {
    return (
        <main className="mx-auto max-w-360 space-y-6 px-5 py-5 md:space-y-8 md:px-12 md:py-8">
            <HomeHero />
            <SubjectSection />
            <ContinueLearning />
            <RecommendedPaths />
        </main>
    )
}

export default function Home() {
    return (
        <HomeContextProvider>
            <HomeContent />
        </HomeContextProvider>
    )
}
