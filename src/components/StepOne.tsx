const moods = [
  { title: "Very Happy", img: "/icon-very-happy-color.svg" },
  { title: "Happy", img: "/icon-happy-color.svg" },
  { title: "Neutral", img: "/icon-neutral-color.svg" },
  { title: "Sad", img: "/icon-sad-color.svg" },
  { title: "Very Sad", img: "/icon-very-sad-color.svg" },
];

type StepOneProps = {
  mood: string;
  handleMoodChange: (value: string) => void;
};

function StepOne({ mood, handleMoodChange }: StepOneProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-preset3M font-bold text-neutral900">
        How was your mood today?
      </h3>
      <div className="flex flex-col gap-3">
        {moods.map(({ title, img }) => (
          <button
            key={title}
            onClick={() => handleMoodChange(title)}
            className={`px-5 py-3 rounded-[10px] flex items-center gap-3 justify-between border-2  bg-white ${
              mood === title ? "border-blue600" : "border-blue200"
            }`}
          >
            <div className="flex items-center gap-2">
              {mood === title ? (
                <div className="w-5 h-5 border-5 border-blue600 rounded-full"></div>
              ) : (
                <div className="w-5 h-5 border-[1.5px] border-blue200 rounded-full"></div>
              )}
              <span className="text-preset5 text-neutral900 font-semibold">
                {title}
              </span>
            </div>
            <img src={img} alt="" className="w-9.5 h-9.5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default StepOne;
