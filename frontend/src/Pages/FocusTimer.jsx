import { useEffect, useState } from 'react'

const durations = [25, 50, 90]

const sessions = [
    { title: 'JavaScript fundamentals', subject: 'JavaScript', detail: 'Arrays and functions', time: '25 min', color: 'bg-lime' },
    { title: 'Linear algebra', subject: 'Mathematics', detail: 'Vectors and matrices', time: '50 min', color: 'bg-york' },
    { title: 'Read chapter 4', subject: 'Biology', detail: 'Cellular respiration', time: '25 min', color: 'bg-pink' },
]

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

    return (
        <main className="mx-auto max-w-360 space-y-6 px-5 py-7 sm:px-8 lg:px-12">
            <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">Make time for what matters</p>
                    <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">Focus timer</h1>
                </div>
                <p className="text-sm font-medium text-muted">One task at a time. You’ve got this.</p>
            </header>

            <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
                <div className="space-y-5">
                    <section className="rounded-[22px] bg-navy p-5 text-white sm:p-8 lg:p-10" aria-labelledby="focus-title">
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
                                    {isRunning ? 'Pause session' : 'Start focus'}
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

                    <section className="rounded-[18px] border border-border bg-white p-5 sm:p-6" aria-labelledby="sessions-title">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <h2 id="sessions-title" className="text-lg font-extrabold">Today’s sessions</h2>
                                <p className="mt-1 text-xs text-muted">Pick up where you left off</p>
                            </div>
                            <span className="rounded-full bg-lilac px-3 py-1.5 text-[10px] font-extrabold text-navy">3 PLANNED</span>
                        </div>
                        <div className="mt-4 divide-y divide-border/70">
                            {sessions.map((session) => {
                                const isSelected = selectedSubject === session.subject
                                return (
                                    <button
                                        key={session.title}
                                        type="button"
                                        onClick={() => setSelectedSubject(session.subject)}
                                        aria-pressed={isSelected}
                                        className={`flex w-full items-center gap-3 py-3 text-left transition ${isSelected ? 'rounded-xl bg-lilac/60 px-3' : 'hover:bg-lilac/40'}`}
                                    >
                                        <span className={`h-3 w-3 shrink-0 rounded-full ${session.color}`} aria-hidden="true" />
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-sm font-bold">{session.title}</span>
                                            <span className="mt-0.5 block truncate text-xs text-muted">{session.detail}</span>
                                        </span>
                                        <span className="shrink-0 text-xs font-semibold text-muted">{session.time}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </section>
                </div>

                <aside className="space-y-5">
                    <section className="rounded-[18px] border border-border bg-white p-5 sm:p-6" aria-labelledby="setup-title">
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
                </aside>
            </div>
        </main>
    )
}
