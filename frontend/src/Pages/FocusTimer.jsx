import { useEffect, useState } from 'react'
import { durations, initialLessons } from '../const/index.js'

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0')
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0')
    return `${minutes}:${remainingSeconds}`
}

export default function FocusTimer() {
    const [duration, setDuration] = useState(25)
    const [timeLeft, setTimeLeft] = useState(25 * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [selectedSubject, setSelectedSubject] = useState('JavaScript')
    const [lessons, setLessons] = useState(initialLessons)
    const [isLessonFormOpen, setIsLessonFormOpen] = useState(false)
    const [lessonTitle, setLessonTitle] = useState('')

    useEffect(() => {
        if (!isRunning || timeLeft === 0) return undefined

        const timeoutId = window.setTimeout(() => {
            if (timeLeft <= 1) {
                setTimeLeft(0)
                setIsRunning(false)
                return
            }

            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => window.clearTimeout(timeoutId)
    }, [isRunning, timeLeft])

    const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100
    const completedCount = lessons.filter((lesson) => lesson.completed).length
    const activeLessonId = lessons.find((lesson) => !lesson.completed)?.id

    function chooseDuration(minutes) {
        setDuration(minutes)
        setTimeLeft(minutes * 60)
        setIsRunning(false)
    }

    function resetTimer() {
        setIsRunning(false)
        setTimeLeft(duration * 60)
    }

    function toggleTimer() {
        if (isRunning) {
            setIsRunning(false)
            return
        }

        if (timeLeft === 0) setTimeLeft(duration * 60)
        setIsRunning(true)
    }

    function addLesson(event) {
        event.preventDefault()
        const title = lessonTitle.trim()
        if (!title) return

        setLessons((current) => [...current, {
            id: `custom-${Date.now()}`,
            title,
            detail: '12 min · 2 exercises',
            completed: false,
        }])
        setLessonTitle('')
        setIsLessonFormOpen(false)
    }

    return (
        <main className="mx-auto max-w-360 space-y-6 px-5 py-7 sm:px-8 lg:px-12">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">Make time for what matters</p>
                    <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">Focus timer</h1>
                </div>
                <p className="text-sm font-medium text-muted">One task at a time. You’ve got this.</p>
            </header>

            <div className="grid min-w-0 grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
                    <section className="rounded-[22px] bg-navy p-5 text-white sm:p-8 lg:p-10 xl:col-start-1 xl:row-start-1" aria-labelledby="focus-title">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex min-w-0 items-center gap-3">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime text-lg font-extrabold text-navy" aria-hidden="true">◎</span>
                                <div className="min-w-0">
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-lime">Focus session</p>
                                    <h2 id="focus-title" className="mt-1 truncate text-lg font-extrabold sm:text-xl">Focus on {selectedSubject}</h2>
                                </div>
                            </div>
                            <span className="shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white/75">{duration} MIN</span>
                        </div>

                        <div className="mx-auto mt-7 max-w-xl text-center sm:mt-8">
                            <p className="text-xs font-medium text-white/60">{isRunning ? 'Stay in the zone' : 'Ready when you are'}</p>
                            <p className="mt-1 text-6xl font-extrabold leading-none tracking-tight tabular-nums sm:text-7xl" aria-live="polite">{formatTime(timeLeft)}</p>
                            <div
                                className="mt-6 h-2 overflow-hidden rounded-full bg-white/15"
                                role="progressbar"
                                aria-label="Focus session progress"
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuenow={Math.round(progress)}
                            >
                                <div className="h-full rounded-full bg-lime transition-[width] duration-500" style={{ width: `${progress}%` }} />
                            </div>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={toggleTimer}
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                                >
                                    <span aria-hidden="true">{isRunning ? 'Ⅱ' : '▶'}</span>
                                    {isRunning ? 'Pause focus' : 'Start focus'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetTimer}
                                    className="min-h-12 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </section>

                <aside className="space-y-5 xl:col-start-2 xl:row-span-2 xl:row-start-1">
                    <section className="rounded-[18px] border-2 border-lime bg-navy p-5 text-white sm:p-6" aria-labelledby="daily-focus-title">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-lime">Daily goal</p>
                                <h2 id="daily-focus-title" className="mt-1 text-lg font-extrabold">Focus time</h2>
                            </div>
                            <span className="text-sm font-bold text-white/70">1h 15m / 2h</span>
                        </div>
                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20" role="progressbar" aria-label="Daily focus goal" aria-valuemin={0} aria-valuemax={120} aria-valuenow={75}>
                            <div className="h-full w-[62.5%] rounded-full bg-lime" />
                        </div>
                        <p className="mt-3 text-xs leading-relaxed text-white/65">You’re making steady progress. Keep going!</p>
                    </section>

                    <section className="rounded-[18px] border border-border bg-white p-5 sm:p-6" aria-labelledby="today-lessons-title">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue">JavaScript essentials</p>
                                <h2 id="today-lessons-title" className="mt-1 text-lg font-extrabold">Today’s lessons</h2>
                            </div>
                            <span className="shrink-0 rounded-full bg-lilac px-3 py-1.5 text-[10px] font-extrabold text-navy">{completedCount} OF {lessons.length} DONE</span>
                        </div>
                        <p className="mt-3 text-sm text-muted">Tap the circle or mark done after finishing a lesson.</p>
                        <div className="mt-4 space-y-2.5">
                            {lessons.map((lesson) => {
                                const isActive = !lesson.completed && lesson.id === activeLessonId
                                return (
                                    <div key={lesson.id} className={`flex min-h-20.5 items-center gap-3 rounded-xl border px-3 py-3 sm:px-4 ${isActive ? 'border-2 border-lime bg-lime/20' : 'border-border'}`}>
                                        <button
                                            type="button"
                                            onClick={() => setLessons((current) => current.map((item) => item.id === lesson.id ? { ...item, completed: !item.completed } : item))}
                                            aria-label={`${lesson.completed ? 'Mark as not done' : 'Mark done'}: ${lesson.title}`}
                                            aria-pressed={lesson.completed}
                                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-sm font-extrabold ${lesson.completed ? 'border-muted bg-muted text-lime' : isActive ? 'border-lime bg-lime text-navy' : 'border-border bg-white text-navy'}`}
                                        >
                                            {lesson.completed ? '✓' : isActive ? '○' : ''}
                                        </button>
                                        <div className="min-w-0 flex-1">
                                            <p className={`text-sm font-bold leading-snug ${lesson.completed ? 'text-muted line-through' : ''}`}>{lesson.title}</p>
                                            <p className="mt-1 text-xs text-muted">{lesson.detail}</p>
                                        </div>
                                        <span className={`shrink-0 rounded-full px-2.5 py-2 text-[10px] font-extrabold ${lesson.completed ? 'bg-lilac/70 text-muted' : isActive ? 'bg-navy text-lime' : 'bg-lilac text-muted'}`}>
                                            {lesson.completed ? 'DONE' : isActive ? 'NOW' : 'MARK DONE'}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                        {isLessonFormOpen ? (
                            <form className="mt-4 space-y-3" onSubmit={addLesson}>
                                <label className="sr-only" htmlFor="new-lesson-title">Lesson title</label>
                                <input
                                    id="new-lesson-title"
                                    autoFocus
                                    required
                                    value={lessonTitle}
                                    onChange={(event) => setLessonTitle(event.target.value)}
                                    placeholder="Enter a lesson title"
                                    className="min-h-11 w-full rounded-lg border border-border px-3 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-lime"
                                />
                                <div className="flex gap-2">
                                    <button type="submit" className="min-h-10 flex-1 rounded-lg bg-navy px-3 text-xs font-extrabold text-white transition hover:bg-muted">Add lesson</button>
                                    <button type="button" onClick={() => { setIsLessonFormOpen(false); setLessonTitle('') }} className="min-h-10 rounded-lg bg-lilac px-3 text-xs font-bold text-navy transition hover:bg-pink">Cancel</button>
                                </div>
                            </form>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsLessonFormOpen(true)}
                                className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border text-xs font-extrabold uppercase text-blue transition hover:border-blue hover:bg-lilac/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                            >
                                <span className="text-lg leading-none" aria-hidden="true">+</span>
                                Add Lesson To Session
                            </button>
                        )}
                    </section>
                </aside>

                <section className="rounded-[18px] border border-border bg-white p-5 sm:p-6 xl:col-start-1 xl:row-start-2" aria-labelledby="setup-title">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <h2 id="setup-title" className="text-lg font-extrabold">Focus setup</h2>
                            <p className="mt-1 text-xs text-muted">Choose a session length</p>
                        </div>
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-lilac text-lg" aria-hidden="true">◷</span>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2" aria-label="Focus session length">
                        {durations.map((minutes) => (
                            <button
                                key={minutes}
                                type="button"
                                onClick={() => chooseDuration(minutes)}
                                aria-pressed={duration === minutes}
                                className={`rounded-xl px-2 py-3 text-center transition ${duration === minutes ? 'bg-navy text-white' : 'bg-lilac text-navy hover:bg-pink'}`}
                            >
                                <span className="block text-sm font-extrabold">{minutes}</span>
                                <span className={`mt-0.5 block text-[10px] font-semibold ${duration === minutes ? 'text-white/65' : 'text-muted'}`}>minutes</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-5 rounded-xl bg-lilac/70 p-4">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted">Current task</p>
                        <p className="mt-1 text-sm font-extrabold">{selectedSubject}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">Keep your attention on one task until the timer ends.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
