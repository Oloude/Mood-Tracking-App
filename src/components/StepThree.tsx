type StepThreeProps = {
  feels : string; 
  handleFeelsChange : (value : string) => void;
}

function StepThree({feels, handleFeelsChange} : StepThreeProps) {
  return (
    <div className="flex flex-col gap-6">
         <h3 className="text-preset3M font-bold text-neutral900">Write about your day...</h3>
         <div className="flex flex-col gap-2">
            <textarea value={feels} onChange={(e) => handleFeelsChange(e.target.value)} name="" id="" className="h-37.5 rounded-[10px] px-4 py-3 bg-white border border-neutral300 resize-none"></textarea>
            <span className={`self-end text-preset8  ${feels.length > 150 ? 'text-red700' : 'text-neutral600'}`}>{feels.length}/150</span>
         </div>
    </div>
  )
}

export default StepThree