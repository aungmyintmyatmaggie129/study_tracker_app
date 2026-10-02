import { NavLink } from 'react-router-dom'
import { useHomeContext } from '../contexts/useHomeContext.js'

export default function HomeHero() {
    const { welcome } = useHomeContext()
    const progress = Math.round((welcome.completedMinutes / welcome.goalMinutes) * 100)

    return (
        <section className="relative flex min-h-[253px] flex-col justify-center overflow-hidden rounded-[16px] bg-navy px-5 py-5 text-white md:min-h-[250px] md:flex-row md:items-center md:justify-between md:rounded-[18px] md:px-8 md:py-7">
            <div className="max-w-[520px]">
                <p className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-lime">
                    {welcome.date} · <span className="hidden md:inline">&nbsp;{welcome.desktopTag}</span><span className="md:hidden">&nbsp;{welcome.mobileTag}</span>
                </p>
                <h1 className="mt-2 text-[27px] font-extrabold leading-[1.1] tracking-tight md:mt-3 md:text-[36px]">{welcome.title}</h1>
                <p className="mt-1.5 max-w-[340px] text-[13px] leading-[1.35] text-white/65 md:max-w-none md:text-[14px]">{welcome.description}</p>
                <div className="mt-4 md:hidden">
                    <div className="flex justify-between text-[11px] font-bold">
                        <span>Today&apos;s goal</span>
                        <span>{welcome.completedMinutes} / {welcome.goalMinutes} min</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
                    </div>
                </div>
                <NavLink to="/subjects" className="mt-4 flex min-h-[52px] items-center justify-between rounded-[9px] bg-lime px-3 text-[12px] font-extrabold text-navy md:mt-5 md:inline-flex md:min-h-[50px] md:justify-center md:gap-3 md:px-5">
                    <span className="flex items-center gap-2.5">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[9px] text-lime">▶</span>
                        START LEARNING
                    </span>
                    <span className="text-[10px] md:hidden">{welcome.nextSessionMinutes} MIN</span>
                </NavLink>
            </div>
            <div className="hidden w-[390px] rounded-[16px] bg-white p-5 text-navy md:block">
                <div className="flex items-center justify-between">
                    <span className="text-[15px] font-extrabold">Today&apos;s goal</span>
                    <span className="text-[16px] font-extrabold text-blue">{progress}%</span>
                </div>
                <p className="mt-1 text-[12px] text-muted">{welcome.completedMinutes} of {welcome.goalMinutes} minutes complete</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-lilac">
                    <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <div className="flex h-[62px] items-center gap-2.5 rounded-[10px] bg-york px-3">
                        <span className="text-lg">♨</span>
                        <span>
                            <strong className="block text-[15px] leading-none">{welcome.streakDays} days</strong>
                            <small className="mt-1 block text-[9px] font-extrabold uppercase">Current streak</small>
                        </span>
                    </div>
                    <div className="flex h-[62px] flex-col justify-center rounded-[10px] bg-lilac px-3">
                        <strong className="text-[15px] leading-none">{welcome.weeklyStudyTime}</strong>
                        <small className="mt-1 text-[9px] font-extrabold uppercase text-muted">This week</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
