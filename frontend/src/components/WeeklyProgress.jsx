import { DaysOfWeek } from '../const/index.js'
export default function WeeklyProgress() {
    return (
        <article className="rounded-2xl bg-navy p-5 text-white sm:min-h-53.5">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-[13px] font-extrabold uppercase">This week</h2>
                    <p className="mt-1 text-[11px] text-white/60">Your focused study time</p>
                </div>
                <strong className="text-lg text-lime">6h 40m</strong>
            </div>
            <div className="mt-4 flex h-31.5 items-end justify-between gap-2 sm:gap-4">
                {DaysOfWeek.map(({day, progress}, index) => (
                    <div key={`${day}-${index}`} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                        <div className="flex h-26 w-6 items-end rounded-full bg-white/15">
                            <div className={`w-full rounded-full bg-lime `} style={{ height: `${progress}%` }} />
                        </div>
                        <span className={`text-[10px] font-bold`}>{day.charAt(0).toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}
