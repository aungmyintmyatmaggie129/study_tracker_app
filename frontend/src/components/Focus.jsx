export default function Focus() {
    return (
        <article className="rounded-2xl border-[3px] border-lime bg-navy p-5 text-white">
            <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                    <button type="button" aria-label="Start focus session" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime text-lg text-navy transition hover:bg-white">▶</button>
                    <div className="min-w-0">
                        <h2 className="text-base font-bold">Start focus</h2>
                        <p className="truncate text-[11px] text-pink">Calculus · Integration techniques</p>
                    </div>
                </div>
                <span className="shrink-0 text-xs text-pink">45 MIN</span>
            </div>
            <div className="mt-5 h-1 rounded-full bg-white/20" />
            <p className="mt-2 text-[10px] text-white/55">Music off · Notifications muted</p>
        </article>
    )
}
