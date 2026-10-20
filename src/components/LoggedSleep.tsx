let hours = {
  '1' : '0–2 hours',
  '3.5' : '3–4 hours',
  '5.5' : '5–6 hours',
  '7.5' : '7–8 hours',
  '9' : '9+ hours',
}

function LoggedSleep({sleepHours} : {sleepHours : number}) {
  return (
    <section className="p-5 rounded-2xl bg-white border border-blue100 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-preset6 text-neutral600 font-medium">
            <img src="/icon-sleep.svg" alt="" />
            Sleep
        </div>
        <h3 className="text-preset3M text-neutral900 font-bold">{hours[sleepHours.toString() as keyof typeof hours]}</h3>
    </section>
  )
}

export default LoggedSleep