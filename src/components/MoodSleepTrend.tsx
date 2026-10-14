

function MoodSleepTrend() {
  return (
    <section className="flex flex-col gap-5 px-4 py-5 bg-white border border-blue100 rounded-2xl">
        <h3 className="text-preset3M text-neutral900">Mood and sleep trends</h3>
       

<div className="grid grid-cols-[80px_1fr] gap-5 items-start grid-rows-1">
   <div className="grid grid-rows-5 gap-10">
    {["9+ hours", "7-8 hours", "5-6 hours", "3-4 hours", "0-2 hours"].map(
      (hours) => (
        <div key={hours} className="flex items-center gap-1">
          <img src="/icon-sleep.svg" alt="" className="shrink-0" />
          <span className="text-preset9 text-neutral600 whitespace-nowrap">
            {hours}
          </span>
        </div>
      )
    )}
  </div>

<div className="overflow-x-auto "  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
  <div className="flex flex-col gap-10 min-w-150">
    <div className="grid grid-rows-5 gap-10 h-60">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center">
            <div className="h-px w-full bg-neutral200" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-11 gap-3">
        {Array.from({ length: 11 }, (_, i) => i + 6).map((day) => (
          <div key={day} className="flex flex-col items-center gap-1.5">
            <p className="text-preset9 text-neutral600">April</p>
            <span className="text-preset8 font-semibold text-neutral900">
              {String(day).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

  </div>
  </div>
</div>
    </section>
  )
}

export default MoodSleepTrend