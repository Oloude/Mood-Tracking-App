import { RiZzzLine } from "react-icons/ri";
import getAverageMood from "../utils/getAverageMood";
import { GoArrowDownRight, GoArrowRight, GoArrowUpRight } from "react-icons/go";



type AverageSleepProps = {
  moodIconColors: {
    mood: string;
    value: number;
    color: string;
    iconWhite: string;
    iconColor: string;
}[];
moods : {
    createdAt: string;
    mood: number;
    feelings: string[];
    journalEntry: string;
    sleepHours: number;
}[];
}

const arrows = [{
icon : GoArrowRight,
title : 'Same as the previous 5 check-ins'
},
{
icon : GoArrowUpRight,
title : 'Increase from the previous 5 check-ins'
},
{
icon : GoArrowDownRight,
title : 'Decrease from the previous 5 check-ins'
}, ]

function AverageSleep({ moods} : AverageSleepProps) {
  let averages = getAverageMood(moods)

  let lastAverageSleep = averages && averages.lastSleepAverage
  let previousAverageSleep = averages && averages.previousSleepAverage

  // let moodDetails = moodIconColors.find(m => m.value === lastAverageSleep)
  let arrowNumber = lastAverageSleep === previousAverageSleep ? 0 : lastAverageSleep > previousAverageSleep ? 1 : 2
  const ArrowIcon = arrows[arrowNumber].icon;

let sleepHours: string | false = false;

if (averages && typeof lastAverageSleep === "number") {
  sleepHours =
    lastAverageSleep < 3
      ? "0–2 hours"
      : lastAverageSleep < 5
        ? "3–4 hours"
        : lastAverageSleep < 7
          ? "5–6 hours"
          : lastAverageSleep < 9
            ? "7–8 hours"
            : "9+ hours";
}


  return (
    <div className="flex flex-col gap-3">
        <h4 className="text-neutral900 text-preset5 font-semibold">Average Sleep  <span className="text-neutral600 text-preset7 font-normal">(Last 5 Check-ins)</span></h4>
        { (moods.length < 10 && averages === false ) ? <div className="bg-blue100 rounded-2xl px-4 py-5 h-37.5 flex flex-col gap-3 justify-center relative overflow-hidden">
            <h5 className="text-preset4 font-semibold text-neutral900">Not enough data yet! </h5>
            <span className="text-neutral900 text-preset7">Track 5 nights to view average sleep.</span>
            <img src="/bg-pattern-averages.svg" alt="" className="absolute -right-15 top-0 h-full  object-cover"/>
        </div> : <div  className={` rounded-2xl px-4 py-5 h-37.5 flex flex-col gap-3 justify-center relative overflow-hidden bg-blue600`} >
          <div className="flex items-center gap-4 text-white">
            {/* <img src='/icon-sleep.svg' alt="" /> */}
            <RiZzzLine className="w-5 h-5" />
            <h6 className="text-preset4  font-bold">{sleepHours}</h6>
          </div>
          <div className="flex items-center gap-2 text-preset7 text-white/70">
            <ArrowIcon/>
            {arrows[arrowNumber].title}
          </div>
          <img src="/bg-pattern-averages.svg" alt="" className="absolute -right-15 top-0 h-full  object-cover"/>
          </div>}
    </div>
  )
}

export default AverageSleep



