import { NavLink } from 'react-router-dom'

export default function SubjectCard({ subject }) {
    return (
        <>
            <NavLink
                to="/subjects"
                className={`inline-flex min-h-[41px] items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-bold md:hidden ${subject.active ? 'border-lime bg-navy text-white' : 'border-border bg-white text-navy'}`}
            >
                <span className={`grid h-6 w-6 place-items-center rounded-md text-[8px] font-extrabold text-navy ${subject.color}`}>{subject.icon}</span>
                {subject.name}
            </NavLink>
            <NavLink
                to="/subjects"
                className={`hidden min-h-[148px] flex-col justify-between rounded-[16px] border p-4 shadow-[0_3px_10px_rgba(12,26,43,0.06)] md:flex ${subject.active ? 'border-[3px] border-lime bg-navy text-white' : 'border-border bg-white text-navy'}`}
            >
                <span className="flex items-center justify-between">
                    <span className={`grid h-10 w-10 place-items-center rounded-[9px] text-[11px] font-extrabold text-navy ${subject.color}`}>{subject.icon}</span>
                    <span className={`text-[12px] font-bold ${subject.active ? 'text-lime' : 'text-blue'}`}>{subject.progress}%</span>
                </span>
                <span>
                    <span className="block text-[16px] font-bold">{subject.name}</span>
                    <span className={`mt-0.5 block text-[12px] ${subject.active ? 'text-white/55' : 'text-muted'}`}>{subject.lessonsCompleted} of {subject.lessonCount} lessons</span>
                </span>
                <span className={`h-2 overflow-hidden rounded-full ${subject.active ? 'bg-white/20' : 'bg-lilac'}`}>
                    <span className={`block h-full rounded-full ${subject.active ? 'bg-lime' : subject.color}`} style={{ width: `${subject.progress}%` }} />
                </span>
            </NavLink>
        </>
    )
}
