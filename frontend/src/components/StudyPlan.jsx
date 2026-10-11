import { StudyPlanSessions } from '../const/index.js'

export default function StudyPlan() {
    return (
        <article className="rounded-2xl bg-white p-5 shadow-[0_10px_28px_rgba(12,26,43,0.09)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-normal">Today&apos;s study plan</h2>
                    <p className="mt-1 text-xs text-muted">1 of 3 sessions complete · 55 min remaining</p>
                </div>
                <span className="shrink-0 rounded-full bg-lime px-2.5 py-1 text-[10px] font-extrabold">{StudyPlanSessions.length} SESSIONS</span>
            </div>
            <div className="mt-3">
                {StudyPlanSessions.map((session, index) => (
                    <div key={session.subject} className={`flex min-h-19.5 items-center gap-3.5 ${index ? 'border-t border-border' : ''}`}>
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[10px] text-xl ${session.color}`} aria-hidden="true">{session.icon}</span>
                        <div className="min-w-0 flex-1">
                            <h3 className="truncate text-sm font-semibold">{session.subject}</h3>
                            <p className="truncate text-xs text-muted">{session.topic}</p>
                        </div>
                        <span className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-bold ${session.active ? 'bg-navy text-white' : 'bg-lilac text-navy'}`}>{session.active && '✓ '}{session.duration}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}
