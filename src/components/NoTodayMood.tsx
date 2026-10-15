type NoMoodProps = {
    openMoodLog :React.Dispatch<React.SetStateAction<boolean>>;
}

function NoTodayMood({openMoodLog} : NoMoodProps) {
  return (
    <button onClick={() => openMoodLog(true)} className="h-15 w-56.5 bg-blue600 rounded-[10px] flex items-center justify-center self-center text-preset5 text-white font-semibold">Log today's mood</button>
  )
}

export default NoTodayMood