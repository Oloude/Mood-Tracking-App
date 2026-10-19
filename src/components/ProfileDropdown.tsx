import { FiLogOut } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router";

type DropdownProps = {
  handleSetting: () => void;
};
function ProfileDropdown({ handleSetting }: DropdownProps) {
  const navigate = useNavigate();
  const storedDetails = localStorage.getItem("onboarding");
  let onboardingDetails = storedDetails
    ? JSON.parse(storedDetails)
    : {
        name: "",
        avatar: File,
      };
  const storedLoginDetails = localStorage.getItem("login-details");
  let loginDetails = storedLoginDetails
    ? JSON.parse(storedLoginDetails)
    : {
        email: "",
        password: "",
      };

  function logOut() {
    console.log('clicked')
    localStorage.setItem(
      "login-details",
      JSON.stringify({ ...loginDetails, isActive: false }),
    );
    navigate("/login");
  }

  return (
    <section className="w-full md:w-50 rounded-xl px-4 py-3 shadow-dropdown gap-3 flex flex-col divide-y divide-neutral200 bg-white absolute top-12 right-0">
      <div className="flex flex-col gap-2 pb-3">
        <h3 className="text-preset6 text-neutral900 capitalize">
          {onboardingDetails.name}
        </h3>
        <p className="text-preset7 text-neutral300">{loginDetails.email}</p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleSetting}
          className="flex items-center gap-2.5 text-preset7 text-neutral900"
        >
          <LuSettings className="w-4 h-4" /> Settings
        </button>
        <button
          onClick={logOut}
          className="flex items-center gap-2.5 text-preset7 text-neutral900"
        >
          <FiLogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </section>
  );
}

export default ProfileDropdown;
