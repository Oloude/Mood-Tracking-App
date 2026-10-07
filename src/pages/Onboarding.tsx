import { useRef, useState } from "react";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router";

type FormDataState = {
  name: string;
  avatar: File | null;
};
function Onboarding() {
  const imageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    avatar: null,
  });
  const [formError, setFormError] = useState({
    name: "",
    avatar: "",
  });

  function handleImageClick() {
    imageRef.current?.click();
  }

  function handleNameChange(value: string) {
    setFormData((prev) => ({ ...prev, name: value }));
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setFormData((prev) => ({ ...prev, avatar: file }));
  };

  const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const error = {
    name: "",
    avatar: "",
  };

  if (!formData.name.trim() || formData.name.trim().length < 4) {
    error.name = "Enter a valid name";
  }

  if (!formData.avatar) {
    error.avatar = "Upload image";
  } else if (
    formData.avatar.type !== "image/png" &&
    formData.avatar.type !== "image/jpeg"
  ) {
    error.avatar = "Only PNG or JPEG images are allowed";
  } else if (formData.avatar.size > 250 * 1024) {
    error.avatar = "Image must be less than 250KB";
  }

  setFormError(error);

  if (error.avatar || error.name) {
    return;
  }

  // Convert File to a string
  const avatarUrl = await fileToDataUrl(formData.avatar!);

  // Object that can actually be stored in localStorage
  const onboardingData = {
    name: formData.name.trim(),
    avatar: avatarUrl,
  };

  localStorage.setItem(
    "onboarding",
    JSON.stringify(onboardingData)
  );

  navigate("/");
}

  return (
    <section className="min-h-screen w-full flex items-center px-4 flex-col gap-8 md:gap-12 py-20 bg-custom-gradient font-reddit">
      <img src="/logo.svg" alt="" />
      <div className="flex flex-col gap-8 rounded-2xl px-4 md:px-8 py-10 shadow-form max-w-132.5 w-full bg-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-preset3M md:text-preset3 text-neutral900">
            Personalize your experience
          </h1>
          <p className="text-preset6 text-neutral600">
            Add your name and a profile picture to make Mood yours.
          </p>
        </div>
        <form
          id="onboarding"
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-preset6 text-neutral900">
              Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Jane Appleseed"
              autoComplete="off"
              className={`outline-none px-4 py-3 rounded-[10px] border  text-preset6 text-neutral600 ${formError.name ? "border-red700" : "border-neutral300"}`}
            />
            {formError.name && (
              <span className="flex items-center gap-1.5 text-preset9 text-red700">
                <MdError className="w-3 h-3 text-red700" /> {formError.name}
              </span>
            )}
          </div>
          <div className="flex gap-5">
            {formData.avatar ? (
              <img
                src={URL.createObjectURL(formData.avatar)}
                alt=""
                className="w-16 h-16 object-cover rounded-full"
              />
            ) : (
              <img src="/avatar-placeholder.svg" alt="" className="w-16 h-16" />
            )}
            <input
              type="file"
              name=""
              id=""
              ref={imageRef}
              hidden
              onChange={handleFileChange}
            />
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-preset6 text-neutral900">Upload Image</h3>
                <p className="text-preset7 text-neutral600">
                  Max 250KB, PNG or JPEG
                </p>
              </div>
              <button
                onClick={handleImageClick}
                type="button"
                className="px-4 py-2 rounded-lg border border-neutral300 text-preset6 text-neutral900 self-start"
              >
                Upload
              </button>
              {formError.avatar && (
                <span className="flex items-center gap-1.5 text-preset9 text-red700">
                  <MdError className="w-3 h-3 text-red700" /> {formError.avatar}
                </span>
              )}
            </div>
          </div>
        </form>
        <div className="flex flex-col items-center gap-5">
          <button
            form="onboarding"
            className="px-8 py-3 rounded-[10px] bg-blue600 text-white text-preset5 w-full font-semibold"
          >
            Start Tracking
          </button>
        </div>
      </div>
    </section>
  );
}

export default Onboarding;
