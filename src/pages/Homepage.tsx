import { useState } from "react";
import AverageContainer from "../components/AverageContainer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import MoodSleepTrend from "../components/MoodSleepTrend";
import NoTodayMood from "../components/NoTodayMood";
import MoodLog from "../components/MoodLog";

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
  



  return (
    <main className="flex flex-col gap-16 pb-20 bg-custom-gradient min-h-screen font-reddit">
     {openMoodLog && <MoodLog closeModal={setOpenMoodLog}/>}
      <div className="flex flex-col gap-12 px-4 pt-8">
        <Header avatarDetails={avatarDetails} setAvatarDetails={setAvatarDetails}/>
        <Greeting name={avatarDetails.name}/>
        <NoTodayMood openMoodLog={setOpenMoodLog}/>
      </div>
      <div className="flex flex-col gap-8 px-4 md:px-8">
        <AverageContainer />
        <MoodSleepTrend/>
      </div>
    </main>
  );
}

export default Homepage;
