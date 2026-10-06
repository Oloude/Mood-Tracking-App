function Onboarding() {
  return    <section className="min-h-screen w-full flex items-center px-4 flex-col gap-8 md:gap-12 py-20 bg-custom-gradient font-reddit">
      <img src="/logo.svg" alt="" />
      <div className="flex flex-col gap-8 rounded-2xl px-4 md:px-8 py-10 shadow-form max-w-132.5 w-full bg-white">
        <div className="flex flex-col gap-2">
            <h1 className="text-preset3M md:text-preset3 text-neutral900">Personalize your experience</h1>
            <p className="text-preset6 text-neutral600">Add your name and a profile picture to make Mood yours.</p>
        </div>
        <form action="" className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-preset6 text-neutral900">Name</label>
                <input type="text" name="name" id="" placeholder="Jane Appleseed"  autoComplete="off" className="outline-none px-4 py-3 rounded-[10px] border border-neutral300 text-preset6 text-neutral600"/>
            </div>
            <div className="flex gap-5">
                <img src="/avatar-placeholder.svg" alt="" className="w-16 h-16"/>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-preset6 text-neutral900">Upload Image</h3>
                        <p className="text-preset7 text-neutral600">Max 250KB, PNG or JPEG</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg border border-neutral300 text-preset6 text-neutral900 self-start">Upload</button>
                </div>
            </div>

        </form>
        <div className="flex flex-col items-center gap-5">
            <button className="px-8 py-3 rounded-[10px] bg-blue600 text-white text-preset5 w-full font-semibold">Start Tracking</button>

        </div>

      </div>
    </section>;
}

export default Onboarding;
