import LoggedFeeling from "./LoggedFeeling";
import LoggedReflection from "./LoggedReflection";
import LoggedSleep from "./LoggedSleep";

function MoodLoggedContainer() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-5">
      <LoggedFeeling />
      <div className="flex flex-col gap-5 lg:col-span-2">
        <LoggedSleep />
        <LoggedReflection />
      </div>
    </div>
  );
}

export default MoodLoggedContainer;
