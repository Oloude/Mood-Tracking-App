import AverageContainer from "../components/AverageContainer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import MoodSleepTrend from "../components/MoodSleepTrend";

function Homepage() {
  return (
    <main className="flex flex-col gap-16 pb-20 bg-custom-gradient min-h-screen font-reddit">
      <div className="flex flex-col gap-12 px-4 pt-8">
        <Header />
        <Greeting />
      </div>
      <div className="flex flex-col gap-8 px-4 md:px-8">
        <AverageContainer />
        <MoodSleepTrend/>
      </div>
    </main>
  );
}

export default Homepage;
