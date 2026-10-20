type FeelingProps = {
    journalEntry : string; moodNumber : number;
}

const moods = {
    '-2' :{
        title : 'Very Sad',
        img : '/icon-very-sad-color.svg',
    },
    '-1' :{
        title : 'Sad',
        img : '/icon-sad-color.svg',
    },
    '0' :{
        title : 'Neutral',
        img : '/icon-neutral-color.svg',
    },
    '1' :{
        title : 'Happy',
        img : '/icon-happy-color.svg',
    },
    '2' :{
        title : 'Very Happy',
        img : '/icon-very-happy-color.svg',
    },
}

function LoggedFeeling({journalEntry, moodNumber} : FeelingProps) {

  return (
   <section className="grid grid-cols-1 gap-8 px-4 py-8 border border-blue100 bg-white rounded-2xl md:grid-cols-2 overflow-hidden lg:col-span-3">
    <div className="flex flex-col gap-2 items-center md:items-start">
        <h3 className="text-preset3M text-neutral900/70 font-bold">I’m feeling</h3>
        <p className="text-preset2 text-neutral900 font-bold">{moods[moodNumber.toString() as keyof typeof moods].title}</p>
    </div>
    <div className="w-50 h-50 md:row-span-2 md:w-80 md:h-80 md:-mb-18">
        <img src={moods[moodNumber.toString() as keyof typeof moods].img} alt="" className="w-full h-full"/>
    </div>
    

    <div className="flex flex-col gap-4 items-center md:items-start">
        <img src="/icon-quote.svg" alt="" />
        <p className="text-preset6 text-neutral900 italic">“{journalEntry}”</p>
    </div>

   </section>
  )
}

export default LoggedFeeling