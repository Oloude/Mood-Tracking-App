import { useState } from "react";
import AverageContainer from "../components/AverageContainer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import MoodSleepTrend from "../components/MoodSleepTrend";
import NoTodayMood from "../components/NoTodayMood";
import MoodLog from "../components/MoodLog";
import MoodLoggedContainer from "../components/MoodLoggedContainer";

type Mood = {
  mood : string;
  tags : string[];
  feels : string;
  sleepHours : string;
}
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


  



  return (
    <main className="flex flex-col gap-16 pb-20 bg-custom-gradient min-h-screen font-reddit px-4 md:px-8 lg:px-33.75">
     {openMoodLog && <MoodLog closeModal={setOpenMoodLog} moodLog={moodLog} setMoodLog={setMoodLog}/>}
      <div className="flex flex-col gap-12 pt-8">
        <Header avatarDetails={avatarDetails} setAvatarDetails={setAvatarDetails}/>
        <Greeting name={avatarDetails.name}/>
        <NoTodayMood openMoodLog={setOpenMoodLog}/>
        <MoodLoggedContainer/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <AverageContainer />
        <MoodSleepTrend/>
      </div>
    </main>
  );
}

export default Homepage;
