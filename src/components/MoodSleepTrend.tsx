import { useState } from "react";
import getFormattedDate from "../utils/formateDate";
import getLastElevenDay from "../utils/getLastElevenDay";

type MoodProps = {
  moods: {
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
};

function MoodSleepTrend({ moodIconColors, moods }: MoodProps) {
  let elevenDates = getLastElevenDay(
    moods[moods.length - 1].createdAt,
  ).toReversed();
  let dateArr = getFormattedDate(elevenDates);
  const [showDetails, setShowDetails] = useState< null | number>(null)

  return (
    <section className="flex flex-col gap-5 px-4 py-5 bg-white border border-blue100 rounded-2xl lg:col-span-2">
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
            ),
          )}
        </div>

        <div
          className="overflow-x-auto "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col gap-10 min-w-150 relative">
            <div className="grid grid-rows-5 gap-10 h-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="h-px w-full bg-neutral200" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-11 gap-3 absolute bottom-10  right-0 w-full z-10 h-66 items-end">
             {elevenDates.map((date, i) => {
  const mood = moods.find(
    (entry) => entry.createdAt.slice(0, 10) === date.slice(0, 10)
  );

  if (!mood) {
    return <div key={date} />;
  }
                
                return (
                  <div
                    key={mood.createdAt}
                    onMouseEnter={()=> setShowDetails(i)}
                    onMouseLeave={() => setShowDetails(null)}
                    className={`w-10 rounded-full p-1 flex items-start justify-center md:ml-5 lg:ml-2 hover:cursor-pointer relative ${
                      mood.sleepHours === 1
                        ? "h-16"
                        : mood.sleepHours === 3.5
                          ? "h-28"
                          : mood.sleepHours === 5.5
                            ? "h-40"
                            : mood.sleepHours === 7.5
                              ? "h-52"
                              : "h-66"
                    }`}
                    style={{
                      backgroundColor: moodIconColors.find(
                        (item) => item.value === mood.mood,
                      )?.color,
                    }}
                  >
                    <img
                      src={
                        moodIconColors.find((item) => item.value === mood.mood)
                          ?.iconWhite
                      }
                      alt=""
                    />
                    {showDetails === i && <div className={`w-43 min-h-58 rounded-[10px] bg-white shadow-dropdown z-100 absolute bottom-0 p-3 flex flex-col gap-3 border border-blue100 ${i < 4 ? 'left-12' : '-left-45'}`}>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-preset8 text-neutral600 font-semibold">Mood</h4>
                        <div className="flex items-center gap-1.5 text-preset7 text-neutral900">
                          <img src={ moodIconColors.find((item) => item.value === mood.mood)
                          ?.iconColor} alt="" className="w-5 h-5" />
                           {moodIconColors.find((item) => item.value === mood.mood)
                          ?.mood}
                        </div>
                      </div>
                       <div className="flex flex-col gap-1.5">
                        <h4 className="text-preset8 text-neutral600 font-semibold">Sleep</h4>
                        <div className="text-preset9 text-neutral900">{mood.sleepHours === 1 ? '0-2 hours' : mood.sleepHours === 3.5 ? '3-4 hours' : mood.sleepHours === 5.5 ? '5-6 hours' : mood.sleepHours === 7.5 ? '7-8 hours' : '9+ hours'}</div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-preset8 text-neutral600 font-semibold">Reflection</h4>
                        <div className="text-preset9 text-neutral900">{mood.journalEntry}</div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="text-preset8 text-neutral600 font-semibold">Tags</h4>
                        <div className="text-preset9 text-neutral900">{mood.feelings.join(', ')}</div>
                      </div>
                    </div>}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-11 gap-3">
              {dateArr.map(({ month, date }) => (
                <div key={date} className="flex flex-col items-center gap-1.5">
                  <p className="text-preset9 text-neutral600">{month}</p>
                  <span className="text-preset8 font-semibold text-neutral900">
                    {date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoodSleepTrend;
