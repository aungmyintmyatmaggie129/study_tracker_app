import { NavLink } from 'react-router-dom'

const subjects = [
    { name: 'HTML', icon: 'HTML', progress: 75, color: 'bg-york' },
    { name: 'CSS', icon: 'CSS', progress: 64, color: 'bg-pink' },
    { name: 'JavaScript', icon: 'JS', progress: 75, color: 'bg-lime', active: true },
    { name: 'React', icon: '▣', progress: 35, color: 'bg-pink' },
    { name: 'Python', icon: 'PY', progress: 28, color: 'bg-york' },
]

const paths = [
    { title: 'Front-end foundations', detail: 'HTML, CSS and JavaScript · 32 lessons', mobileDetail: '32 lessons · Beginner', badge: 'BEGINNER · 6 WEEKS', icon: '▤', color: 'bg-lime' },
    { title: 'Build with React', detail: 'Components, hooks and APIs · 24 lessons', mobileDetail: '24 lessons · Popular', badge: 'POPULAR · 5 WEEKS', icon: '⚛', color: 'bg-pink' },
    { title: 'Python problem solving', detail: 'Python basics to automation · 38 lessons', mobileDetail: '38 lessons · Career path', badge: 'CAREER PATH · 8 WEEKS', icon: '>_', color: 'bg-york' },
]

function SubjectCard({ subject }) {
    return (
        <NavLink
            to="/subjects"
            className={`hidden min-h-37 rounded-2x1 border p-4 shadow-[0_3px_10px_rgba(12,26,43,0.06)] md:flex md:flex-col md:justify-between ${subject.active ? 'border-[3px] border-lime bg-navy text-white' : 'border-border bg-white text-navy'}`}
        >
            <div className="flex items-center justify-between">
                <span className={`grid h-10 w-10 place-items-center rounded-[9px] text-[11px] font-extrabold text-navy ${subject.color}`}>{subject.icon}</span>
                <span className={`text-[12px] font-bold ${subject.active ? 'text-lime' : 'text-blue'}`}>{subject.progress}%</span>
            </div>
            <div>
                <span className="block text-[16px] font-bold">{subject.name}</span>
                <span className={`mt-0.5 block text-[12px] ${subject.active ? 'text-white/55' : 'text-muted'}`}>{subject.name === 'HTML' ? '12' : subject.name === 'CSS' ? '9' : subject.name === 'JavaScript' ? '18' : subject.name === 'React' ? '7' : '5'} of {subject.name === 'HTML' ? '16' : subject.name === 'CSS' ? '14' : subject.name === 'JavaScript' ? '24' : subject.name === 'React' ? '20' : '18'} lessons</span>
            </div>
            <span className={`h-2 overflow-hidden rounded-full ${subject.active ? 'bg-white/20' : 'bg-lilac'}`}>
                <span className={`block h-full rounded-full ${subject.active ? 'bg-lime' : subject.color}`} style={{ width: `${subject.progress}%` }} />
            </span>
        </NavLink>
    )
}

function PathCard({ path }) {
    return (
        <NavLink to="/subjects" className="flex min-h-19.25 items-center gap-4 border-b border-border px-2 py-3 last:border-b-0 md:min-h-44.5 md:flex-col md:items-stretch md:justify-between md:rounded-2x1 md:border-0 md:bg-white md:p-5 md:shadow-[0_3px_10px_rgba(12,26,43,0.06)]">
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[10px] text-[14px] font-extrabold text-navy md:h-12 md:w-12 md:rounded-lg ${path.color}`}>{path.icon}</span>
            <span className="min-w-0 flex-1 md:flex md:items-start md:justify-between md:gap-2">
                <span>
                    <span className="block truncate text-[13px] font-bold md:text-[14px]">{path.title}</span>
                    <span className="mt-0.5 block text-[10px] text-muted md:hidden">{path.mobileDetail}</span>
                    <span className="mt-0.5 hidden text-[11px] text-muted md:block">{path.detail}</span>
                </span>
                <span className="hidden shrink-0 pt-1 text-[10px] font-extrabold text-blue md:block">{path.badge}</span>
            </span>
            <span className="text-base text-blue md:hidden" aria-hidden="true">→</span>
        </NavLink>
    )
}

export default function Home() {
    return (
        <main className="mx-auto max-w-360 space-y-6 px-5 py-5 md:space-y-8 md:px-12 md:py-8">
            <section className="relative flex min-h-63.25 flex-col justify-center overflow-hidden rounded-2x1 bg-navy px-5 py-5 text-white md:min-h-62.5 md:flex-row md:items-center md:justify-between md:rounded-[18px] md:px-8 md:py-7">
                <div className="max-w-130">
                    <p className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-lime md:text-[10px]">Tuesday · <span className="hidden md:inline">&nbsp;keep your momentum</span><span className="md:hidden">&nbsp;day 12</span></p>
                    <h1 className="mt-2 text-[27px] font-extrabold leading-[1.1] tracking-tight md:mt-3 md:text-[36px]">Ready to learn, Alex?</h1>
                    <p className="mt-1.5 max-w-85 text-[13px] leading-[1.35] text-white/65 md:max-w-none md:text-[14px]">Continue JavaScript or choose a new subject for today&apos;s session.</p>
                    <div className="mt-4 md:hidden">
                        <div className="flex justify-between text-[11px] font-bold"><span>Today&apos;s goal</span><span>35 / 60 min</span></div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[58%] rounded-full bg-lime" /></div>
                    </div>
                    <NavLink to="/subjects" className="mt-4 flex min-h-13 items-center justify-between rounded-[9px] bg-lime px-3 text-[12px] font-extrabold text-navy md:mt-5 md:inline-flex md:min-h-12.5 md:justify-center md:gap-3 md:px-5">
                        <span className="flex items-center gap-2.5"><span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[9px] text-lime">▶</span> START LEARNING</span>
                        <span className="text-[10px] md:hidden">25 MIN</span>
                    </NavLink>
                </div>
                <div className="hidden w-97.5 rounded-2x1 bg-white p-5 text-navy md:block">
                    <div className="flex items-center justify-between">
                        <span className="text-[15px] font-extrabold">Today&apos;s goal</span>
                        <span className="text-[16px] font-extrabold text-blue">58%</span>
                    </div>
                    <p className="mt-1 text-[12px] text-muted">35 of 60 minutes complete</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-lilac"><div className="h-full w-[58%] rounded-full bg-lime" /></div>
                    <div className="mt-4 grid grid-cols-2 gap-2.5">
                        <div className="flex h-15.5 items-center gap-2.5 rounded-[10px] bg-york px-3">
                            <span className="text-lg">♨</span><span><strong className="block text-[15px] leading-none">12 days</strong><small className="mt-1 block text-[9px] font-extrabold uppercase">Current streak</small></span>
                        </div>
                        <div className="flex h-15.5 flex-col justify-center rounded-[10px] bg-lilac px-3">
                            <strong className="text-[15px] leading-none">6h 40m</strong><small className="mt-1 text-[9px] font-extrabold uppercase text-muted">This week</small>
                        </div>
                    </div>
                </div>
            </section>

            <section aria-labelledby="subjects-heading">
                <div className="mb-2.5 flex items-center justify-between md:mb-3">
                    <h2 id="subjects-heading" className="text-[19px] font-bold md:text-[20px]">Choose a subject</h2>
                    <NavLink to="/subjects" className="text-[10px] font-bold text-blue">View all subjects →</NavLink>
                </div>
                <div className="flex flex-wrap gap-2 md:grid md:grid-cols-5 md:gap-3">
                    {subjects.map((subject) => (
                        <SubjectOption key={subject.name} subject={subject} />
                    ))}
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-[minmax(0,2.2fr)_minmax(190px,0.9fr)] md:gap-4">
                <article className="min-h-39 rounded-2x1 bg-white p-4 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:min-h-59.5 md:rounded-r-none md:p-6">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <p className="text-[10px] font-extrabold uppercase text-blue">Continue learning</p>
                            <h2 className="mt-1 text-[17px] font-bold leading-tight">JavaScript essentials</h2>
                        </div>
                        <span className="shrink-0 rounded-full bg-lilac px-2.5 py-1.5 text-[8px] font-extrabold uppercase">Lesson 18 of 24</span>
                    </div>
                    <NavLink to="/subjects" className="mt-4 flex items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[9px] bg-lime text-[13px] font-extrabold">JS</span>
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-[12px] font-bold">Async JavaScript and promises</span>
                            <span className="mt-1 block text-[10px] text-muted">12 min lesson · 2 practice exercises</span>
                        </span>
                        <span className="hidden h-10 items-center gap-2 rounded-[9px] bg-navy px-4 text-[10px] font-bold text-white md:flex">RESUME <span className="text-lime">→</span></span>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-[13px] text-white md:hidden">→</span>
                    </NavLink>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-lilac"><div className="h-full w-3/4 rounded-full bg-lime" /></div>
                </article>
                <article className="hidden rounded-2x1 bg-white p-6 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:block md:min-h-59.5">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[16px] font-bold">Today&apos;s progress</h2>
                        <span className="text-[10px] font-extrabold text-blue">35 / 60 MIN</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-lilac"><div className="h-full w-[58%] rounded-full bg-lime" /></div>
                    <div className="mt-3 grid grid-cols-2 gap-2.5">
                        <div className="rounded-[9px] bg-lilac px-3 py-2.5"><strong className="block text-[25px] leading-none">2</strong><span className="mt-2 block text-[9px] uppercase text-muted">Lessons done</span></div>
                        <div className="rounded-[9px] bg-lilac px-3 py-2.5"><strong className="block text-[25px] leading-none">240</strong><span className="mt-2 block text-[9px] uppercase text-muted">XP earned</span></div>
                    </div>
                    <p className="mt-3 text-[9px] text-muted">25 more minutes keeps your 12-day streak alive.</p>
                </article>
            </section>

            <section aria-labelledby="paths-heading">
                <div className="mb-2.5 flex items-center justify-between md:mb-3">
                    <h2 id="paths-heading" className="text-[19px] font-bold md:text-[20px]">Recommended study paths</h2>
                    <NavLink to="/subjects" className="text-[10px] font-bold text-blue">Explore paths →</NavLink>
                </div>
                <div className="rounded-2x1 bg-white px-2 shadow-[0_5px_16px_rgba(12,26,43,0.08)] md:grid md:grid-cols-3 md:gap-4 md:rounded-none md:bg-transparent md:px-0 md:shadow-none">
                    {paths.map((path) => <PathCard key={path.title} path={path} />)}
                </div>
            </section>
        </main>
    )
}

function SubjectOption({ subject }) {
    return (
        <>
            <NavLink to="/subjects" className={`inline-flex min-h-10.25 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-bold md:hidden ${subject.active ? 'border-lime bg-navy text-white' : 'border-border bg-white text-navy'}`}>
                <span className={`grid h-6 w-6 place-items-center rounded-md text-[8px] font-extrabold text-navy ${subject.color}`}>{subject.icon}</span>
                {subject.name}
            </NavLink>
            <SubjectCard subject={subject} />
        </>
    )
}
