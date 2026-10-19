

function LoggedFeeling() {
  return (
   <section className="grid grid-cols-1 gap-8 px-4 py-8 border border-blue100 bg-white rounded-2xl md:grid-cols-2 overflow-hidden lg:col-span-3">
    <div className="flex flex-col gap-2 items-center md:items-start">
        <h3 className="text-preset3M text-neutral900/70 font-bold">I’m feeling</h3>
        <p className="text-preset2 text-neutral900 font-bold">Very Happy</p>
    </div>
    <div className="w-50 h-50 md:row-span-2 md:w-80 md:h-80 md:-mb-18">
        <img src="/icon-very-happy-color.svg" alt="" className="w-full h-full"/>
    </div>
    

    <div className="flex flex-col gap-4 items-center md:items-start">
        <img src="/icon-quote.svg" alt="" />
        <p className="text-preset6 text-neutral900 italic">“When your heart is full, share your light with the world.”</p>
    </div>

   </section>
  )
}

export default LoggedFeeling