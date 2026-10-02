import { NavLink } from 'react-router-dom'
import { useHomeContext } from '../contexts/useHomeContext.js'
import PathCard from './cards/PathCard.jsx'

export default function RecommendedPaths() {
    const { paths } = useHomeContext()

    return (
        <section aria-labelledby="paths-heading">
            <div className="mb-2.5 flex items-center justify-between md:mb-3">
                <h2 id="paths-heading" className="text-[19px] font-bold md:text-[20px]">Recommended study paths</h2>
                <NavLink to="/subjects" className="text-[10px] font-bold text-blue">Explore paths →</NavLink>
            </div>
            <div className="rounded-[16px] bg-white px-2 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:grid md:grid-cols-3 md:gap-4 md:rounded-none md:bg-transparent md:px-0 md:shadow-none">
                {paths.map((path) => <PathCard key={path.title} path={path} />)}
            </div>
        </section>
    )
}
