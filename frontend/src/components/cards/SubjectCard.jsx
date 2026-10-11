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
                to="/focus"
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

export function MainSubjectCard({ subject }) {
    return (
        <article className="rounded-[16px] border border-border/70 bg-white p-4 shadow-[0_5px_18px_rgba(12,26,43,0.06)] sm:p-5 md:rounded-[18px] md:p-6">
            <div className="flex items-start gap-3.5">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[11px] text-[12px] font-extrabold text-navy sm:h-12 sm:w-12 ${subject.color}`} aria-hidden="true">{subject.icon}</span>
                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <h2 className="truncate text-[15px] font-extrabold tracking-tight md:text-[17px]">{subject.name}</h2>
                        <span className="shrink-0 rounded-full bg-lilac px-2 py-1 text-[7px] font-extrabold tracking-wide text-muted md:text-[8px]">{subject.status}</span>
                    </div>
                    <p className="mt-1.5 text-[10px] leading-[1.55] text-muted md:mt-2 md:text-[11px]">{subject.description}</p>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[9px] md:mt-5 md:text-[10px]">
                <span className="font-semibold text-muted">{subject.completedLessons} of {subject.totalLessons} lessons</span>
                <span className="font-extrabold text-blue">{subject.progress}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-lilac md:mt-2.5 md:h-2">
                <div className={`h-full rounded-full ${subject.color}`} style={{ width: `${subject.progress}%` }} />
            </div>
        </article>
    )
}

