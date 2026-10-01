import { NavLink } from 'react-router-dom'
import { NavLinks } from '../const/index.js'

export default function NavBar() {
    return (
        <nav className="flex flex-wrap items-center justify-between gap-5" aria-label="Main navigation">
            <NavLink to="/" className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-navy text-sm font-extrabold text-lime">S</span>
                <span className="text-[15px] font-extrabold tracking-tight">STUDY MODE</span>
            </NavLink>
            <div className="order-3 flex w-full items-center justify-center gap-7 sm:order-2 sm:w-auto sm:gap-9">
                {NavLinks.map(([label, path]) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) => `group relative py-1 text-[15px] font-semibold transition ${isActive ? 'font-extrabold' : 'opacity-80 hover:opacity-100'}`}
                    >
                        {({ isActive }) => (
                            <>
                                {label}
                                <span className={`absolute -bottom-1 left-1/2 h-0.75 w-7 -translate-x-1/2 rounded-full bg-lime transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'}`} />
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
            <div className="order-2 flex items-center gap-3 sm:order-3">
                <label className="hidden items-center gap-2 border-2 rounded-full bg-white/40 px-3.5 py-2 sm:flex">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input className="w-32 bg-transparent text-xs outline-none placeholder:text-muted" placeholder="Search notes..." aria-label="Search notes" />
                </label>
                <button type="button" aria-label="Open profile" className="grid h-10 w-10 place-items-center rounded-full border-2 border-navy bg-white text-xs font-extrabold">AM</button>
            </div>
        </nav>
    )
}
