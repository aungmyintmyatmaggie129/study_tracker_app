import { NavLink } from 'react-router-dom'

export default function Upcoming() {
  return (
    <NavLink to="/schedule" className="flex items-center gap-3.5 rounded-2xl bg-blue p-5 text-white transition hover:brightness-110">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[10px] bg-white text-navy"><div className="text-center leading-none"><span className="block text-[10px] text-blue">SEP</span><strong className="text-xl">24</strong></div></div>
      <div className="min-w-0 flex-1"><p className="text-[10px] font-extrabold uppercase text-lime">Upcoming exam · 3 days</p><h2 className="mt-1 truncate text-[15px] font-extrabold">Biology — Cell respiration</h2><p className="mt-1 text-[11px] text-white/70">8 chapters · 64% prepared</p></div>
      <span className="text-xl" aria-hidden="true">→</span>
    </NavLink>
  )
}
