import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Streak from '../components/Streak.jsx'
import WeeklyProgress from '../components/WeeklyProgress.jsx'
import StudyPlan from '../components/StudyPlan.jsx'
import Focus from '../components/Focus.jsx'
import Goal from '../components/Goal.jsx'
import Upcoming from '../components/Upcoming.jsx'

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-lilac text-navy">
            <header className="rounded-b-[22px] bg-white px-5 py-6 sm:px-8 lg:px-12">
                <NavBar />
                {/* <div className="mt-8 flex items-end justify-between gap-6">
                    <div>
                        <p className="text-[11px] font-medium uppercase tracking-wide text-navy">Monday · 21 September</p>
                        <h1 className="mt-2 text-3xl font-normal tracking-tight sm:text-4xl lg:text-[42px]">Ready to make today count, Alex?</h1>
                    </div>
                    <div className="hidden shrink-0 text-right sm:block">
                        <p className="text-[10px] font-extrabold uppercase">Daily goal</p>
                        <p className="mt-1 text-lg font-extrabold">1h 15m / 2h</p>
                    </div>
                </div> */}
            </header>

            <main className="mx-auto flex max-w-360 flex-col gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:px-12">
                <section className="min-w-0 flex-1 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-[200px_minmax(0,1fr)]">
                        <Streak />
                        <WeeklyProgress />
                    </div>
                    <StudyPlan />
                </section>
                <aside className="w-full space-y-4.5 lg:max-w-105">
                    <Upcoming />
                    <Focus />
                    <Goal />
                    <div className="grid grid-cols-2 gap-3">
                        <NavLink to="/schedule" className="rounded-[10px] bg-pink px-3 py-3 text-center text-xs font-bold text-navy transition hover:bg-[#c9b9df]">+ Add session</NavLink>
                        <NavLink to="/schedule" className="rounded-[10px] bg-pink px-3 py-3 text-center text-xs font-bold text-navy transition hover:bg-[#c9b9df]">▣ View calendar</NavLink>
                    </div>
                </aside>
            </main>
        </div>
    )
}

export default Dashboard
