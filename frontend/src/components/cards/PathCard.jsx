import { NavLink } from 'react-router-dom'

export default function PathCard({ path }) {
    return (
        <NavLink to="/subjects" className="flex min-h-[77px] items-center gap-4 border-b border-border px-2 py-3 last:border-b-0 md:min-h-[178px] md:flex-col md:items-stretch md:justify-between md:rounded-[16px] md:border-0 md:bg-white md:p-5 md:shadow-[0_3px_10px_rgba(12,26,43,0.06)]">
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
