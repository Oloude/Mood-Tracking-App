

function AverageSleep() {
  return (
    <div className="flex flex-col gap-3">
        <h4 className="text-neutral900 text-preset5 font-semibold">Average Sleep  <span className="text-neutral600 text-preset7 font-normal">(Last 5 Check-ins)</span></h4>
        <div className="bg-blue100 rounded-2xl px-4 py-5 h-37.5 flex flex-col gap-3 justify-center relative overflow-hidden">
            <h5 className="text-preset4 font-semibold text-neutral900">Not enough data yet! </h5>
            <span className="text-neutral900 text-preset7">Track 5 nights to view average sleep.</span>
            <img src="/bg-pattern-averages.svg" alt="" className="absolute -right-15 top-0 h-full  object-cover"/>
        </div>
    </div>
  )
}

export default AverageSleep