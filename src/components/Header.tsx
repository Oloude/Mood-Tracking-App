import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import ProfileDropdown from "./ProfileDropdown"
import SettingModal from "./SettingModal"

type HeaderProps = {
    avatarDetails: {
    name: string;
    avatar: string;
},
setAvatarDetails: React.Dispatch<React.SetStateAction<{
 name: string;
 avatar: string;
}>>
}

function Header({avatarDetails, setAvatarDetails} : HeaderProps) {
    

    const [showDropdown, setShowDropdown] = useState(false)
    const [openSettingModal, setOpenSettingModal] = useState(false)

    function handleOpenSettingModal(){
        setShowDropdown(false)
        setOpenSettingModal(true)
    }

    function handleCloseSettingModal(){
        setOpenSettingModal(false)
    }

  return (
    <header className="flex items-center gap-3 justify-between relative">
        <img src="/logo.svg" alt="" />
        <div className="flex gap-2.5 items-center">
            <img src={avatarDetails.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <button onClick={()=> setShowDropdown(prev => !prev)} className="text-neutral900"><IoIosArrowDown className="w-4 h-4" /></button>
        </div>
       {showDropdown && <ProfileDropdown handleSetting={handleOpenSettingModal}/>}
       {openSettingModal && <SettingModal closeModal={handleCloseSettingModal} setAvatarDetails={setAvatarDetails}/>}
    </header>
  )
}

export default Header