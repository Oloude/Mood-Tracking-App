import AverageMood from "./AverageMood"
import AverageSleep from "./AverageSleep"


type MoodProps = {
  moods : {
    createdAt: string;
    mood: number;
    feelings: string[];
    journalEntry: string;
    sleepHours: number;
}[];
moodIconColors: {
    mood: string;
    value: number;
    color: string;
    iconWhite: string;
    iconColor: string;
}[];
}

function AverageContainer({moods, moodIconColors} : MoodProps) {
  return (
  <section className="flex flex-col gap-6 px-4 py-5 md:px-5 md:py-6 lg:px-6 rounded-2xl border border-blue100 bg-white lg:col-span-1">
    <AverageMood moodIconColors={moodIconColors} moods={moods}/>
    <AverageSleep/>
  </section>
  )
}

export default AverageContainer