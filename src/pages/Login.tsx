import { useState } from "react";
import { MdError } from "react-icons/md";
import { Link, useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");

  function handleFormDataChange(propsTitle: string, value: string) {
    setFormData((prev) => ({ ...prev, [propsTitle]: value }));
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let error = "";

    //    let loginDetails =  JSON.parse(localStorage.getItem('login-details') ?? null) || {
    //   email: "",
    //   password: "",
    // }

    const storedDetails = localStorage.getItem("login-details");

    let loginDetails = storedDetails
      ? JSON.parse(storedDetails)
      : {
          email: "",
          password: "",
        };

    console.log(loginDetails);
    if (
      loginDetails.email.toLowerCase() !== formData.email.trim().toLowerCase()
    ) {
      error = "One of the crediential is wrong";
    }
    if (
      loginDetails.password.toLowerCase() !==
      formData.password.trim().toLowerCase()
    ) {
      error = "One of the crediential is wrong";
    }

    setFormError(error);
    if (error) {
      return;
    }

    navigate("/");
  }

  return (
    <section className="min-h-screen w-full flex items-center px-4 flex-col gap-8 md:gap-12 py-20 bg-custom-gradient font-reddit">
      <img src="/logo.svg" alt="" />
      <div className="flex flex-col gap-8 rounded-2xl px-4 md:px-8 py-10 shadow-form max-w-132.5 w-full bg-white">
        <div className="flex flex-col gap-2">
          <h1 className="text-preset3M md:text-preset3 text-neutral900">
            Welcome back!
          </h1>
          <p className="text-preset6 text-neutral600">
            {" "}
            Log in to continue tracking your mood and sleep.
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          id="login"
          action=""
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-preset6 text-neutral900">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="name@mail.com"
              value={formData.email}
              onChange={(e) =>
                handleFormDataChange(e.target.name, e.target.value)
              }
              className="outline-none px-4 py-3 rounded-[10px] border border-neutral300 text-preset6 text-neutral600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-preset6 text-neutral900">
              Password
            </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder=""
              value={formData.password}
              onChange={(e) =>
                handleFormDataChange(e.target.name, e.target.value)
              }
              className="outline-none px-4 py-3 rounded-[10px] border border-neutral300 text-preset6 text-neutral600"
            />
          </div>
          {formError && (
            <span className="flex items-center gap-1.5 text-preset9 text-red700">
              <MdError className="w-3 h-3 text-red700" /> {formError}
            </span>
          )}
        </form>
        <div className="flex flex-col items-center gap-5">
          <button
            form="login"
            className="px-8 py-3 rounded-[10px] bg-blue600 text-white text-preset5 w-full font-semibold"
          >
            Log In
          </button>
          <span className="text-preset6 text-neutral600">
            Haven't got an account?{" "}
            <Link to="/signup" className="text-blue600">
              Sign up.
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Login;
