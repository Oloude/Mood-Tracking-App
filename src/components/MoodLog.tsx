import StepOne from "./StepOne";
import { IoClose } from "react-icons/io5";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { useState } from "react";
import { MdError } from "react-icons/md";

let moods = {
  "Very Happy": 2,
  Happy: 1,
  Neutral: 0,
  Sad: -1,
  "Very Sad": -2,
};

let sleeps = {
  "0-2 hours": 1,
  "3-4 hours": 3.5,
  "5-6 hours": 5.5,
  "7-8 hours": 7.5,
  "9+ hours": 9,
};

type Mood = keyof typeof moods;
type Sleep = keyof typeof sleeps;

type LogProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  moodLog: {
    mood: string;
    tags: string[];
    feels: string;
    sleepHours: string;
  };
  setMoodLog: React.Dispatch<
    React.SetStateAction<{
      mood: string;
      tags: string[];
      feels: string;
      sleepHours: string;
    }>
  >;
  setMoods: React.Dispatch<
    React.SetStateAction<{
      moodEntries: {
        createdAt: string;
        mood: number;
        feelings: string[];
        journalEntry: string;
        sleepHours: number;
      }[];
      moodQuotes: {
        "-2": string[];
        "-1": string[];
        "0": string[];
        "1": string[];
        "2": string[];
      };
    }>
  >;
};

function MoodLog({ closeModal, moodLog, setMoodLog, setMoods }: LogProps) {
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  function handleStepChange() {
    let error = "";
    if (step === 1 && !moodLog.mood.trim()) {
      error = "Please select a mood before continuing.";
    }
    if (step === 2 && (moodLog.tags.length === 0 || moodLog.tags.length > 3)) {
      error = "You can only select a maximum of 3 tags.";
    }
    if (step === 3 && (!moodLog.feels.trim() || moodLog.feels.length > 150)) {
      error = "Please write a few words about your day before continuing.";
    }
    if (step === 4 && !moodLog.sleepHours.trim()) {
      error = "Please select a sleep hour before submitting.";
    }

    setErrorMessage(error);
    if (error.trim()) {
      return;
    }
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
    if (step === 4 && moodLog.sleepHours) {
      let newMood = {
        createdAt: new Date().toISOString(),
        mood: moods[moodLog.mood as Mood],
        feelings: moodLog.tags,
        journalEntry: moodLog.feels,
        sleepHours: sleeps[moodLog.sleepHours as Sleep],
      };
      setMoods((prev) => ({
        ...prev,
        moodEntries: [...prev.moodEntries, newMood],
      }));
      const defaultMoodsData = {
        moodEntries: [],
        moodQuotes: {
          "-2": [
            "You are stronger than you think; the storm will pass.",
            "It's okay to cry. Healing begins when you let your feelings flow.",
            "Even in darkness, a spark of hope can shine bright.",
            "This moment is tough, but you've overcome challenges before.",
            "A gentle step forward, no matter how small, is still progress.",
          ],
          "-1": [
            "Pain is temporary, brighter days lie ahead.",
            "Each setback is a chance to grow and learn.",
            "One small positive thought can change your entire day.",
            "It's okay to rest; self-care isn't selfish.",
            "Healing takes time - be patient and kind to yourself.",
          ],
          "0": [
            "A calm mind can find opportunity in every moment.",
            "Sometimes the greatest triumph is simply finding peace.",
            "Take a moment to breathe; every breath is a fresh start.",
            "Even an ordinary day can hold a pleasant surprise.",
            "Balance isn't found, it's created.",
          ],
          "1": [
            "Happiness grows when it's shared with others.",
            "Celebrate even the small victories to make life extraordinary.",
            "Gratitude can turn what you have into enough.",
            "Keep smiling; your joy can be contagious.",
            "Where focus goes, energy flows - keep your focus on what lifts you.",
          ],
          "2": [
            "When your heart is full, share your light with the world.",
            "Savor the highs in life; they become precious memories.",
            "Joy multiplies when spread among friends.",
            "Trust your journey; you're in a beautiful place right now.",
            "Let your happiness ripple out and inspire others.",
          ],
        },
      };

      const moodsData = JSON.parse(
        localStorage.getItem("moodsData") ?? JSON.stringify(defaultMoodsData),
      );

      const updatedMood = {
        ...moodsData,
        moodEntries: [...(moodsData.moodEntries ?? []), newMood],
      };

      localStorage.setItem("moodsData", JSON.stringify(updatedMood));

      closeModal(false);
    }
  }

  function handleMoodChange(value: string) {
    setMoodLog((prev) => ({ ...prev, mood: value }));
  }

  function handleTagChange(tag: string) {
    setMoodLog((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  }

  function handleFeelsChange(value: string) {
    setMoodLog((prev) => ({ ...prev, feels: value }));
  }

  function handleSleepHourChange(value: string) {
    setMoodLog((prev) => ({ ...prev, sleepHours: value }));
  }

  return (
    <section className="fixed z-30 inset-0 flex justify-center bg-neutral900/70 px-4 pt-10">
      <div className="flex flex-col px-5 py-9 md:px-10 md:py-12 md:gap-8 rounded-2xl gap-6 bg-custom-gradient w-full max-w-150 h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => closeModal(false)}
          className="absolute right-5 top-3 text-neutral300"
        >
          <IoClose className="w-6 h-6" />
        </button>
        <h2 className="text-preset3 font-bold text-neutral900">
          Log your mood
        </h2>
        <div className="flex gap-4 items-center w-full">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full flex-1 ${i <= step ? "bg-blue600" : "bg-blue200"}`}
            ></div>
          ))}
        </div>
        {step === 1 && (
          <StepOne mood={moodLog.mood} handleMoodChange={handleMoodChange} />
        )}
        {step === 2 && (
          <StepTwo
            selectedTags={moodLog.tags}
            handleTagChange={handleTagChange}
          />
        )}
        {step === 3 && (
          <StepThree
            feels={moodLog.feels}
            handleFeelsChange={handleFeelsChange}
          />
        )}
        {step === 4 && (
          <StepFour
            sleepHour={moodLog.sleepHours}
            handleSleepHourChange={handleSleepHourChange}
          />
        )}
        {errorMessage.trim() && (
          <span className="flex items-center gap-1.5 text-preset9 text-red700">
            <MdError className="w-3 h-3 text-red700" /> {errorMessage}
          </span>
        )}
        <button
          onClick={handleStepChange}
          className="h-16.5 w-full shrink-0 bg-blue600 rounded-[10px] flex items-center justify-center self-center text-preset5 text-white font-semibold"
        >
          {step === 4 ? "Submit" : "Continue"}
        </button>
      </div>
    </section>
  );
}

export default MoodLog;
