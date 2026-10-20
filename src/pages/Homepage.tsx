import { useState } from "react";
import AverageContainer from "../components/AverageContainer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import MoodSleepTrend from "../components/MoodSleepTrend";
import NoTodayMood from "../components/NoTodayMood";
import MoodLog from "../components/MoodLog";
import MoodLoggedContainer from "../components/MoodLoggedContainer";
import data from '../../src/data.json'
import isTodayLogged from "../utils/isTodayLogged";

type Mood = {
  mood : string;
  tags : string[];
  feels : string;
  sleepHours : string;
}

 let moodIconColors = [
    {
      mood : 'Very Sad',
      value : -2,
      color : '#FF9B99',
      iconWhite : '/icon-very-sad-white.svg',
      iconColor : '/icon-very-sad-color.svg',
    },
    {
      mood : 'Sad',
      value : -1,
      color : '#B8B1FF',
      iconWhite : '/icon-sad-white.svg',
      iconColor : '/icon-sad-color.svg',
    },
    {
      mood : 'Neutral',
      value : 0,
      color : '#89CAFF',
      iconWhite : '/icon-neutral-white.svg',
      iconColor : '/icon-neutral-color.svg',
    },
    {
      mood : 'Happy',
      value : 1,
      color : '#89E780',
      iconWhite : '/icon-happy-white.svg',
      iconColor : '/icon-happy-color.svg',
    },
    {
      mood : 'Very Happy',
      value : 2,
      color : '#FFC97C',
      iconWhite : '/icon-very-happy-white.svg',
      iconColor : '/icon-very-happy-color.svg',
    },
  ]

function Homepage() {
  const storedDetails = localStorage.getItem('onboarding')
      let onboardingDetails = storedDetails ? JSON.parse(storedDetails) : {
          name : '',
          avatar : '',
      }
      const [avatarDetails, setAvatarDetails] = useState<
      {
          name : string,
          avatar : string,
      }
      >(onboardingDetails)

  const [openMoodLog, setOpenMoodLog]     = useState(false)
  const [moodLog, setMoodLog] = useState<Mood>({
    mood : '',
    tags : [],
    feels : '',
    sleepHours : ''
  })
  const [moods, setMoods] = useState(data)

 
let isTodayMoodLogged = moods.moodEntries.length > 0 && isTodayLogged(moods.moodEntries[moods.moodEntries.length - 1].createdAt)


  



  return (
    <main className="flex flex-col gap-16 pb-20 bg-custom-gradient min-h-screen font-reddit px-4 md:px-8 lg:px-33.75">
     {openMoodLog && <MoodLog closeModal={setOpenMoodLog} moodLog={moodLog} setMoodLog={setMoodLog} setMoods={setMoods}/>}
      <div className="flex flex-col gap-12 pt-8">
        <Header avatarDetails={avatarDetails} setAvatarDetails={setAvatarDetails}/>
        <Greeting name={avatarDetails.name}/>
        {isTodayMoodLogged ? <MoodLoggedContainer mood={moods.moodEntries[moods.moodEntries.length - 1]} quotes={moods.moodQuotes}/> : <NoTodayMood openMoodLog={setOpenMoodLog}/>
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <AverageContainer moods={moods.moodEntries} moodIconColors={moodIconColors}/>
        <MoodSleepTrend/>
      </div>
    </main>
  );
}

export default Homepage;

// **Mood**

// - **-2** → Very Sad
// - **-1** → Sad
// - **0** → Neutral
// - **1** → Happy
// - **2** → Very Happy

// **Sleep Hours**

// - **1** → 0–2 hours
// - **3.5** → 3–4 hours
// - **5.5** → 5–6 hours
// - **7.5** → 7–8 hours
// - **9** → 9+ hours

