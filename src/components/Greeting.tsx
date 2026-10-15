import getTodayDate from "../utils/getTodayDate"


function Greeting({name} : {name : string}) {
    let firstname = name.split(' ')[0]
    let lastname = name.split(' ')[1]
        
  return (
    <div className="flex flex-col gap-4 items-center">
        <h2 className="text-preset4 font-bold text-blue600 text-center">Hello, {firstname[0].toUpperCase()+firstname.slice(1)} {lastname[0].toUpperCase()+lastname.slice(1)}!</h2>
        <h1 className="text-preset1M text-neutral900 text-center">How are you feeling today?</h1>
        <p className="text-preset6 text-neutral600 text-center">{getTodayDate()}</p>
    </div>
  )
}

export default Greeting