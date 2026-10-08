import AverageMood from "./AverageMood"
import AverageSleep from "./AverageSleep"


function AverageContainer() {
  return (
  <section className="flex flex-col gap-6 px-4 py-5 md:px-5 md:py-6 lg:px-6 rounded-2xl border border-blue100 bg-white">
    <AverageMood/>
    <AverageSleep/>
  </section>
  )
}

export default AverageContainer