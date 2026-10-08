import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"


function Header() {
    const storedDetails = localStorage.getItem('onboarding')
    let onboardingDetails = storedDetails ? JSON.parse(storedDetails) : {
        name : '',
        avatar : File,
    }
    const [avatarDetails, setAvatarDetails] = useState(onboardingDetails)


  return (
    <header className="flex items-center gap-3 justify-between">
        <img src="/logo.svg" alt="" />
        <div className="flex gap-2.5 items-center">
            <img src={avatarDetails.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <button className="text-neutral900"><IoIosArrowDown className="w-4 h-4" /></button>
        </div>

    </header>
  )
}

export default Header