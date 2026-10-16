
import StepOne from "./StepOne"
import { IoClose } from "react-icons/io5"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import { useState } from "react"
import { MdError } from "react-icons/md"

type LogProps = {
    closeModal : React.Dispatch<React.SetStateAction<boolean>>;
   moodLog: {
 mood: string;
 tags: string[];
 feels: string;
 sleepHours: string;
};
setMoodLog: React.Dispatch<React.SetStateAction<{
 mood: string;
 tags: string[];
 feels: string;
 sleepHours: string;
}>>;
}

function MoodLog({closeModal, moodLog, setMoodLog}: LogProps) {
    const [step, setStep] = useState(1)
    const [errorMessage, setErrorMessage] = useState('')

    function handleStepChange(){
        let error = ''
        if(step === 1 && !moodLog.mood.trim()){
          error = 'Please select a mood before continuing.'
        }
        if(step === 2 && (moodLog.tags.length === 0 || moodLog.tags.length > 3)){
            error = 'You can only select a maximum of 3 tags.'
        }
        if(step === 3 && (!moodLog.feels.trim() || moodLog.feels.length > 150)){
            error = 'Please write a few words about your day before continuing.'
        }
        if(step === 4 && !moodLog.sleepHours.trim()){
            error = 'Please select a sleep hour before submitting.'
        }

       
        setErrorMessage(error)
        if(error.trim()){
            return
        }
        setStep(prev => prev < 4 ? prev + 1 : prev)
        if(step === 4 && moodLog.sleepHours){
            closeModal(false)
        }
    }
   

    function handleMoodChange(value : string){
        setMoodLog(prev => ({...prev, mood: value}))
    }

    function handleTagChange(tag : string){
        setMoodLog(prev => ({...prev , tags : prev.tags.includes(tag) ? prev.tags.filter(t => t !== tag) : [...prev.tags, tag] }))
    }

    function handleFeelsChange(value : string){
        setMoodLog(prev => ({...prev, feels : value}))
    }

    function handleSleepHourChange(value : string){
        setMoodLog(prev => ({...prev, sleepHours : value}))
    }


  return (
    <section className="fixed z-30 inset-0 flex justify-center bg-neutral900/70 px-4 pt-10">
        <div className="flex flex-col px-5 py-9 md:px-10 md:py-12 md:gap-8 rounded-2xl gap-6 bg-custom-gradient w-full max-w-150 h-[90vh] overflow-y-auto relative">
            <button onClick={() => closeModal(false)} className="absolute right-5 top-3 text-neutral300"><IoClose className="w-6 h-6"/></button>
            <h2 className="text-preset3 font-bold text-neutral900">Log your mood</h2>
            <div className="flex gap-4 items-center w-full">
                {[1,2,3,4].map(i => <div key={i} className={`h-1.5 rounded-full flex-1 ${i <= step ? 'bg-blue600' : 'bg-blue200'}`}></div>)}
            </div>
            {step === 1 && <StepOne mood={moodLog.mood} handleMoodChange={handleMoodChange}/>}
            {step === 2 &&  <StepTwo selectedTags={moodLog.tags} handleTagChange={handleTagChange}/>}
            {step === 3 &&  <StepThree feels={moodLog.feels} handleFeelsChange={handleFeelsChange} />}
            {step === 4 && <StepFour sleepHour={moodLog.sleepHours} handleSleepHourChange={handleSleepHourChange}/>}
           {errorMessage.trim() && <span className="flex items-center gap-1.5 text-preset9 text-red700">
                          <MdError className="w-3 h-3 text-red700" /> {errorMessage}
                        </span>}
            <button onClick={handleStepChange} className="h-16.5 w-full shrink-0 bg-blue600 rounded-[10px] flex items-center justify-center self-center text-preset5 text-white font-semibold">{step === 4 ? 'Submit' : 'Continue'}</button>
        </div>
    </section>
  )
}

export default MoodLog