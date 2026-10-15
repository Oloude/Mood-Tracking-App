const sleepHours = [
    '9+ hours', '7-8 hours', '5-6 hours', '3-4 hours', '0-2 hours'
]

function StepFour() {
  return (
    <div className="flex flex-col gap-6">
         <h3 className="text-preset3M font-bold text-neutral900">How many hours did you sleep last night?</h3>
         <div className="flex flex-col gap-3">
            {
                sleepHours.map(hour => <button key={hour} className={`flex border-2 border-blue200 rounded-[10px] items-center gap-3 px-5 py-4 text-preset5 text-neutral900 bg-white`}>
                    <div className="w-5 h-5 border-5 border-blue600 rounded-full"></div>
                        <div className="w-5 h-5 border-[1.5px] border-blue200 rounded-full"></div>
                     {hour} </button>)
            }
         </div>
    </div>
  )
}

export default StepFour