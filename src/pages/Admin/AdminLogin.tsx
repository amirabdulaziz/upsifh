import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { chevronBackOutline } from "ionicons/icons";
import { signInUser } from "../../firebase/firebase"; 


const AdminLogin: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError(""); 
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      await signInUser(email, password);
      history.push("/dashboard");
      console.log("Login successful");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="py-8 px-2">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-secondary font-bold text-2xl">Hello</h1>
            <h2 className="mt-2 text-secondary font-light text-sm">
              Welcome back admin!
            </h2>
          </div>
          <div className="px-2">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            <div className="relative mb-6" data-twe-input-wrapper-init>
              <label
                htmlFor="floating_username"
                className="text-sm text-[#D4C685]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="text-sm text-dark peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-dark dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="floating_username"
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4" data-twe-input-wrapper-init>
              <label
                htmlFor="floating_password"
                className=" text-sm text-[#D4C685]"
              >
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-dark dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                id="floating_password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                aria-label={
                  showPass ? "Password Visible" : "Password Invisible"
                }
                onClick={() => {
                  setShowPass((prev) => !prev);
                }}
              >
                {showPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-6 w-6 select-none text-gray-700 cursor-pointer h-6 absolute top-2 right-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mt-6 w-6 select-none text-gray-700 cursor-pointer h-6 absolute top-2 right-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <button
              type="button"
              color="none"
              className="text-sm text-tertiary font-semibold custom-button h-[40px] md:h-[50px] bg-[#D4C685] w-full justify-center items-center border rounded-lg shadow-lg mb-4"
              onClick={handleSubmit}
            >
              SIGN IN
            </button>
            <div className="text-center ">
              <h2 className="text-xs mt-3 mr-0">
                <a
                  href="/homepage"
                  className="text-xs font-semibold text-[#D4C685] underline"
                >
                  Back to homepage
                </a>
              </h2>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AdminLogin;
