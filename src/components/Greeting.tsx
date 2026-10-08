import getTodayDate from "../utils/getTodayDate"


function Greeting() {
     const storedDetails = localStorage.getItem('onboarding')
        let onboardingDetails = storedDetails ? JSON.parse(storedDetails) : {
            name : '',
            avatar : File,
        }
        
  return (
    <div className="flex flex-col gap-4 items-center">
        <h2 className="text-preset4 font-bold text-blue600 text-center">Hello, {onboardingDetails.name[0].toUpperCase()+onboardingDetails.name.slice(1)}!</h2>
        <h1 className="text-preset1M text-neutral900 text-center">How are you feeling today?</h1>
        <p className="text-preset6 text-neutral600 text-center">{getTodayDate()}</p>
    </div>
  )
}

export default Greeting