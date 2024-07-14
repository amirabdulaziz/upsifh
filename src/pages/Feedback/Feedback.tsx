import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonImg,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import "./Feedback.css";
import { menuOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import { addFeedback } from "../../firebase/firebase";
import Feedbackss from "../../assets/workout.svg";
import Sidebar from "../../component/Sidebar";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!name || !email || !feedback) {
      setError("All fields are required");
      return;
    }

    try {
      console.log("Submitting feedback with data:", { name, email, feedback });
      await addFeedback(name, email, feedback);
      alert("Feedback submitted successfully");
      setName("");
      setEmail("");
      setFeedback("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error submitting feedback: ", error.message);
        setError("Error submitting feedback. Please try again.");
      } else {
        console.error("Unexpected error", error);
        setError("Unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <Sidebar />
      <IonPage id="sidebarmenu">
        <IonHeader className="ion-no-border shadow-none">
          <IonToolbar color="bg-primary" className="pt-8 text-primary">
            <div className="flex flex-cols justify-between items-center px-2">
              <div className="flex flex-row justify-center items-center flex-grow">
                <a>
                  <IonText className="text-lg font-bold text-tertiary">
                    Share Feedbacks
                  </IonText>
                </a>
              </div>
              <IonRow>
                <IonIcon
                  icon={menuOutline}
                  style={{ color: "white" }}
                  className="h-10 w-6"
                  onClick={() => {
                    const menu = document.querySelector(
                      'ion-menu[menu-id="first"]'
                    ) as HTMLIonMenuElement;
                    menu?.open();
                  }}
                ></IonIcon>
              </IonRow>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow className="p-4 flex justify-center pt-6">
              <IonImg src={Feedbackss} className="w-[240px] h-[240px]" />
            </IonRow>
            <IonCol className="flex flex-col justify-center items-center space-y-2">
              <IonRow className="w-full flex justify-center">
                <IonText className="text-center text-4xl font-bold">
                  Feedback
                </IonText>
              </IonRow>
              <IonRow className="w-full flex justify-center">
                <IonText className="text-center text-sm">
                  Tell us how you feel!
                </IonText>
              </IonRow>
            </IonCol>
            <IonRow className="px-2 space-y-2">
              {" "}
              {error && <p className="error-message">{error}</p>}
              <label className="text-sm">Name</label>
              <input
                className="focus:outline-none text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="text-sm">Email</label>
              <input
                className="focus:outline-none text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="text-sm">Feedback</label>
              <textarea
                className="focus:outline-none text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                placeholder="Enter your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={handleSubmit}
                style={{ marginTop: "20px" }}
                className="text-sm text-tertiary font-semibold custom-button h-[40px] md:h-[50px] bg-[#D4C685] w-full justify-center items-center border rounded-lg shadow-lg mb-4"
              >
                Submit Feedback
              </button>
            </IonRow>
          </IonGrid>
        </IonContent>
        <Tabbar />
      </IonPage>
    </>
  );
};

export default Feedback;
