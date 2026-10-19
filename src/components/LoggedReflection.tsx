

function LoggedReflection() {
  return (
    <section className="p-5 rounded-2xl bg-white border border-blue100 flex flex-col gap-4">
         <div className="flex items-center gap-3 text-preset6 text-neutral600 font-medium">
            <img src="/icon-reflection.svg" alt="" />
            Reflection of the day
        </div>
        <div className="min-h-20 text-preset6 text-neutral900">
            Woke up early and finally tackled a big project!
        </div>
        <div className="flex items-center gap-3">
            <span className="text-preset6 text-neutral600 italics">#Grateful</span>
            <span className="text-preset6 text-neutral600 italics">#Optimistic</span>
        </div>
    </section>
  )
}

export default LoggedReflection