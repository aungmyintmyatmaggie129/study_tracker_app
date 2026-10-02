import { NavLink } from 'react-router-dom'
import { useHomeContext } from '../contexts/useHomeContext.js'

export default function ContinueLearning() {
    const { currentLesson, progress, welcome } = useHomeContext()
    const goalProgress = Math.round((welcome.completedMinutes / welcome.goalMinutes) * 100)

    return (
        <section className="grid gap-4 md:grid-cols-[minmax(0,2.2fr)_minmax(190px,0.9fr)] md:gap-4">
            <article className="min-h-[156px] rounded-[16px] bg-white p-4 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:min-h-[238px] md:rounded-r-none md:p-6">
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <p className="text-[10px] font-extrabold uppercase text-blue">Continue learning</p>
                        <h2 className="mt-1 text-[17px] font-bold leading-tight">{currentLesson.subject}</h2>
                    </div>
                    <span className="shrink-0 rounded-full bg-lilac px-2.5 py-1.5 text-[8px] font-extrabold uppercase">Lesson {currentLesson.lessonNumber} of {currentLesson.lessonCount}</span>
                </div>
                <NavLink to="/subjects" className="mt-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[9px] bg-lime text-[13px] font-extrabold">JS</span>
                    <span className="min-w-0 flex-1">
                        <span className="block truncate text-[12px] font-bold">{currentLesson.title}</span>
                        <span className="mt-1 block text-[10px] text-muted">{currentLesson.duration} · {currentLesson.practiceCount} practice exercises</span>
                    </span>
                    <span className="hidden h-10 items-center gap-2 rounded-[9px] bg-navy px-4 text-[10px] font-bold text-white md:flex">RESUME <span className="text-lime">→</span></span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-[13px] text-white md:hidden">→</span>
                </NavLink>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-lilac">
                    <div className="h-full rounded-full bg-lime" style={{ width: `${currentLesson.progress}%` }} />
                </div>
            </article>
            <article className="hidden rounded-[16px] bg-white p-6 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:block md:min-h-[238px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-bold">Today&apos;s progress</h2>
                    <span className="text-[10px] font-extrabold text-blue">{welcome.completedMinutes} / {welcome.goalMinutes} MIN</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-lilac"><div className="h-full rounded-full bg-lime" style={{ width: `${goalProgress}%` }} /></div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <div className="rounded-[9px] bg-lilac px-3 py-2.5"><strong className="block text-[25px] leading-none">{progress.lessonsCompleted}</strong><span className="mt-2 block text-[9px] uppercase text-muted">Lessons done</span></div>
                    <div className="rounded-[9px] bg-lilac px-3 py-2.5"><strong className="block text-[25px] leading-none">{progress.experiencePoints}</strong><span className="mt-2 block text-[9px] uppercase text-muted">XP earned</span></div>
                </div>
                <p className="mt-3 text-[9px] text-muted">{welcome.goalMinutes - welcome.completedMinutes} more minutes keeps your {welcome.streakDays}-day streak alive.</p>
            </article>
        </section>
    )
}
