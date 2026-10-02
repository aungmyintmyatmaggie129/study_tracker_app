import { useMemo, useState } from 'react'
import { SubjectCatalog, SubjectCatalogFilters } from '../const/index.js'

function SubjectCard({ subject }) {
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

export default function Subjects() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [search, setSearch] = useState('')

    const filteredSubjects = useMemo(() => SubjectCatalog.filter((subject) => {
        const matchesFilter = activeFilter === 'All' || subject.category === activeFilter
        const matchesSearch = `${subject.name} ${subject.description}`.toLowerCase().includes(search.trim().toLowerCase())
        return matchesFilter && matchesSearch
    }), [activeFilter, search])

    return (
        <main className="mx-auto min-h-[calc(100vh-90px)] max-w-360 px-3 pb-8 pt-5 sm:px-5 md:px-12 md:pb-12 md:pt-8">
            <section className="mx-auto max-w-[1120px]">
                <header className="mb-5 md:mb-7">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-blue md:text-[10px]">Build your skills</p>
                    <div className="mt-1.5 flex items-end justify-between gap-3">
                        <div>
                            <h1 className="text-[23px] font-extrabold leading-tight tracking-tight md:text-[30px]">Your subjects</h1>
                            <p className="mt-1 text-[10px] text-muted md:mt-2 md:text-[12px]">Pick up where you left off or explore something new.</p>
                        </div>
                        <span className="mb-0.5 hidden rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-muted shadow-sm sm:inline-flex md:text-[10px]">{SubjectCatalog.length} subjects</span>
                    </div>
                </header>

                <div className="mb-4 flex h-10 items-center gap-2.5 rounded-full border border-border bg-white px-3.5 shadow-[0_3px_12px_rgba(12,26,43,0.04)] md:mb-5 md:h-11 md:max-w-[430px]">
                    <svg className="h-4 w-4 shrink-0 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
                        <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <input
                        className="min-w-0 flex-1 bg-transparent text-[10px] outline-none placeholder:text-muted md:text-[11px]"
                        type="search"
                        placeholder="Search subjects..."
                        aria-label="Search subjects"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <span className="hidden rounded border border-border px-1.5 py-0.5 text-[8px] text-muted sm:inline">⌘ K</span>
                </div>

                <nav className="mb-5 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mb-7 md:gap-2" aria-label="Filter subjects">
                    {SubjectCatalogFilters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            aria-pressed={activeFilter === filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-bold transition md:px-4 md:py-2 md:text-[10px] ${activeFilter === filter ? 'border-navy bg-navy text-white' : 'border-border bg-white text-muted hover:border-navy hover:text-navy'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </nav>

                <div className="mb-3 flex items-center justify-between md:mb-4">
                    <div>
                        <h2 className="text-[13px] font-extrabold md:text-[16px]">All subjects</h2>
                        <p className="mt-0.5 text-[9px] text-muted md:text-[10px]">Track your progress across every course.</p>
                    </div>
                    <span className="text-[8px] font-semibold text-muted md:text-[9px]">{filteredSubjects.length} results</span>
                </div>

                {filteredSubjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
                        {filteredSubjects.map((subject) => <SubjectCard key={subject.name} subject={subject} />)}
                    </div>
                ) : (
                    <div className="rounded-[16px] border border-border bg-white px-5 py-12 text-center">
                        <p className="text-[13px] font-bold">No subjects found</p>
                        <p className="mt-1 text-[10px] text-muted">Try another search or choose a different filter.</p>
                    </div>
                )}
            </section>
        </main>
    )
}
