export default function Streak() {
  return (
    <article className="flex min-h-47.5 flex-col justify-between rounded-2xl border-2 border-navy bg-york p-5 sm:min-h-53.5">
      <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase"><span className="text-base">♨</span> Streak</div>
      <div>
        <p className="text-[42px] font-normal leading-none">12</p>
        <p className="mt-1 text-[13px] font-bold">days strong</p>
      </div>
    </article>
  )
}
