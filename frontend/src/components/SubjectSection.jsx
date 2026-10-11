import { NavLink } from 'react-router-dom'
import { useHomeContext } from '../contexts/useHomeContext.js'
import SubjectCard from './cards/SubjectCard.jsx'

export default function SubjectSection() {
    const { subjects } = useHomeContext()

    return (
        <section aria-labelledby="subjects-heading">
            <div className="mb-2.5 flex items-center justify-between md:mb-3">
                <h2 id="subjects-heading" className="text-[19px] font-bold md:text-[20px]">Choose a subject</h2>
                <NavLink to="/subjects" className="text-[10px] font-bold text-blue">View all subjects →</NavLink>
            </div>
            <div className="flex flex-wrap gap-2 md:grid md:grid-cols-5 md:gap-3">
                {subjects.map((subject) => <SubjectCard key={subject.name} subject={subject} />)}
            </div>
        </section>
    )
}
