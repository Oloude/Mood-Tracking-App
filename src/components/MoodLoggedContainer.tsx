import LoggedFeeling from "./LoggedFeeling";
import LoggedReflection from "./LoggedReflection";
import LoggedSleep from "./LoggedSleep";

type ContainerProps = {
 quotes: {
 "-2": string[];
 "-1": string[];
 "0": string[];
 "1": string[];
 "2": string[];
};
mood :  {
    createdAt: string;
    mood: number;
    feelings: string[];
    journalEntry: string;
    sleepHours: number;
};
}
function MoodLoggedContainer({mood, quotes} : ContainerProps) {
  let quote = quotes[mood.mood.toString() as keyof typeof quotes][getRandom(quotes[mood.mood.toString() as keyof typeof quotes].length)]
  console.log(mood)
  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-5">
      <LoggedFeeling journalEntry={mood.journalEntry} moodNumber={mood.mood} />
      <div className="flex flex-col gap-5 lg:col-span-2">
        <LoggedSleep sleepHours={mood.sleepHours}/>
        <LoggedReflection quote={quote} feelings={mood.feelings}  />
      </div>
    </div>
  );
}

export default MoodLoggedContainer;

function getRandom(length : number){
  return Math.floor(Math.random() * length)
}
