const tags = [
'Joyful', 'Down', 'Anxious', 'Calm', 'Excited', 'Frustrated', 'Lonely', 'Grateful', 'Overwhelmed', 'Motivated', 'Irritable', 'Peaceful', 'Tired', 'Hopeful', 'Confident', 'Stressed', 'Content', 'Disappointed', 'Optimistic', 'Restless'
]

type StepTwoProps = {
    selectedTags : string[]; 
    handleTagChange : (tag : string) => void;
}

function StepTwo({selectedTags, handleTagChange} : StepTwoProps) {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
            <h3 className="text-preset3M font-bold text-neutral900">How did you feel?</h3>
            <span className="text-preset6 text-neutral600">Select up to three tags:</span>
        </div>
        <div className="flex flex-wrap gap-4">
            {
                tags.map(tag => <button key={tag} onClick={()=> handleTagChange(tag)} className={`px-4 py-3 rounded-[10px] border-2  flex items-center gap-2 text-preset6 text-neutral900 ${
                    selectedTags.includes(tag) ? 'border-blue600' : 'border-blue200'
                }`}>
                    <input type="checkbox" name="" id="" className="w-4 h-4 accent-blue600" checked={selectedTags.includes(tag)} />
                    {tag}</button>)
            }
        </div>
    </div>
  )
}

export default StepTwo