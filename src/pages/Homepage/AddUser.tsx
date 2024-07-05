import { IonContent, IonPage } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [savedName, setSavedName] = useState<string | null>(null);
  const history = useHistory();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setSavedName(storedName);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem("userName", name);
    setSavedName(name);
    history.push("/homepage");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="py-8 px-2">
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-secondary font-bold text-2xl">Hello</h1>
            <h2 className="mt-2 text-secondary font-light text-sm">
              Tell us your name!
            </h2>
          </div>
          <div className="px-2">
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6" data-twe-input-wrapper-init>
                <label
                  htmlFor="floating_username"
                  className="text-sm text-[#D4C685]"
                >
                  your name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-sm text-dark peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-dark dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="floating_username"
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                type="submit"
                color="none"
                className="text-sm text-tertiary font-semibold custom-button h-[40px] md:h-[50px] bg-[#D4C685] w-full justify-center items-center border rounded-lg shadow-lg mb-4"
              >
                Add your name
              </button>
            </form>
            {savedName && (
              <div className="mt-4 text-center">
                <h2 className="text-lg">Welcome, {savedName}!</h2>
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddUser;
