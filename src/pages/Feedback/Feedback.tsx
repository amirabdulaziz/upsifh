import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonCol,
  IonText,
  IonIcon,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import './Feedback.css';
import { menuOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import { addFeedback } from "../../firebase/firebase";  // Update the path accordingly

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
    <IonPage id="sidebarmenu">
      <IonHeader className="ion-no-border shadow-none">
        <IonToolbar className="px-2">
          <div className="flex flex-cols justify-between items-center">
            <IonRow>Welcome</IonRow>
            <IonRow>
              <IonIcon
                icon={menuOutline}
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
        <IonCol>
          <IonText>
            <h1 className="text-dark text-center">
              WELCOME TO UPSI FH: Feedback 
            </h1>
          </IonText>
        </IonCol>
        {error && <p className="error-message">{error}</p>}
        <form className="feedback-form" onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput
              className="input-box"
              placeholder="Enter your name"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              className="input-box"
              type="email"
              placeholder="Enter your email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Feedback</IonLabel>
            <IonTextarea
              className="input-text"
              placeholder="Enter your feedback"
              value={feedback}
              onIonChange={(e) => setFeedback(e.detail.value!)}
              required
            />
          </IonItem>
          <IonButton type="submit" expand="block" style={{ marginTop: '20px' }}>
            Submit Feedback
          </IonButton>
        </form>
      </IonContent>
      <Tabbar />
    </IonPage>
  );
};

export default Feedback;
