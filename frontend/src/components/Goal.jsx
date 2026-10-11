export default function Goal() {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-[0_10px_28px_rgba(12,26,43,0.09)]">
      <div className="flex items-center justify-between"><h2 className="text-lg font-normal">Weekly goal</h2><strong className="text-xs text-blue">67%</strong></div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-lilac"><div className="h-full w-2/3 rounded-full bg-lime" /></div>
      <div className="mt-3 flex justify-between"><div><p className="text-xl font-extrabold">6h 40m</p><p className="text-[10px] uppercase text-muted">Studied</p></div><div className="text-right"><p className="text-xl font-extrabold">3h 20m</p><p className="text-[10px] uppercase text-muted">To goal</p></div></div>
    </article>
  )
}
