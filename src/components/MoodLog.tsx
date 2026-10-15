
import StepOne from "./StepOne"
import { IoClose } from "react-icons/io5"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"

type LogProps = {
    closeModal : React.Dispatch<React.SetStateAction<boolean>>;
}

function MoodLog({closeModal}: LogProps) {
  return (
    <section className="fixed z-30 inset-0 flex justify-center bg-neutral900/70 px-4 pt-10">
        <div className="flex flex-col px-5 py-9 md:px-10 md:py-12 md:gap-8 rounded-2xl gap-6 bg-custom-gradient w-full max-w-150 h-[90vh] overflow-y-auto relative">
            <button onClick={() => closeModal(false)} className="absolute right-5 top-3 text-neutral300"><IoClose className="w-6 h-6"/></button>
            <h2 className="text-preset3 font-bold text-neutral900">Log your mood</h2>
            <div className="flex gap-4 items-center w-full">
                {[1,2,3,4].map(i => <div key={i} className={`h-1.5 rounded-full flex-1 ${i === 1 ? 'bg-blue600' : 'bg-blue200'}`}></div>)}
            </div>
            {/* <StepOne/> */}
            {/* <StepTwo/> */}
            {/* <StepThree/> */}
            <StepFour/>
            <button className="h-16.5 w-full shrink-0 bg-blue600 rounded-[10px] flex items-center justify-center self-center text-preset5 text-white font-semibold">Continue</button>
        </div>
    </section>
  )
}

export default MoodLog