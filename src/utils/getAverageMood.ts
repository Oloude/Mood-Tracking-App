type Moods = {
  createdAt: string;
  mood: number;
  feelings: string[];
  journalEntry: string;
  sleepHours: number;
};

 function areConsecutive(moods: Moods[]) {
  for (let i = moods.length - 1; i > 0; i--) {
    const current = new Date(moods[i].createdAt);
    const previous = new Date(moods[i - 1].createdAt);
    // const difference = current - previous;
    const currentDay = Date.UTC(
      current.getUTCFullYear(),
      current.getUTCMonth(),
      current.getUTCDate(),
    );

    const previousDay = Date.UTC(
      previous.getUTCFullYear(),
      previous.getUTCMonth(),
      previous.getUTCDate(),
    );

    const difference = (currentDay - previousDay) / (1000 * 60 * 60 * 24);

    if (difference !== 1) {
      return false;
    }
  }

  return true;
}

export default function getAverageMood(mood: Moods[]) {
let result = areConsecutive(mood)

if(result === false){
    return false
}
let lastFiveCheckin = mood.slice(5)
let firstFiveCheckin = mood.slice(0,5)
let lastFiveMoodAverage = getAverage(lastFiveCheckin.map(m => m.mood))
let firstFiveMoodAverage  = getAverage(firstFiveCheckin.map(m => m.mood))

let lastFiveSleepAverage = getAverage(lastFiveCheckin.map(m => m.sleepHours))
let firstFiveSleepAverage = getAverage(lastFiveCheckin.map(m => m.sleepHours))

return {
    lastMoodAverage : lastFiveMoodAverage,
    previousMoodAverage : firstFiveMoodAverage,
    lastSleepAverage : lastFiveSleepAverage,
    previousSleepAverage : firstFiveSleepAverage,
}

}

function getAverage(arr : number[]){
    let total = arr.reduce((total, value) => total + value, 0)
    return Math.floor(total / arr.length)
}
