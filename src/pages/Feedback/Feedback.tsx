import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonTextarea, IonButton } from "@ionic/react";
import React from "react";
import './Feedback.css';  // Importing custom CSS
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import { menuOutline, chevronForwardCircleOutline, chevronForwardOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import Sidebar from "../../component/Sidebar";
const Feedback = () => {
  return (
    <IonPage id="sidebarmenu">
        <IonHeader className="ion-no-border shadow-none ">
          <IonToolbar className="px-2 ">
            <div className="flex flex-cols justify-between items-center">
              <IonRow>Welcome</IonRow>
              <IonRow>
                {/* <IonIcon src={menuOutline} className="w-6 h-6" /> */}
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
        <form className="feedback-form">
          <IonItem >
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput className="input-box" placeholder="Enter your name" required />
          </IonItem>
          <IonItem >
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput className="input-box" type="email" placeholder="Enter your email" required />
          </IonItem>
          <IonItem >
            <IonLabel position="stacked">Feedback</IonLabel>
            <IonTextarea className="input-text" placeholder="Enter your feedback" required />
          </IonItem>
          <IonButton type="submit" expand="block" style={{ marginTop: '20px' }}>
            Submit Feedback
          </IonButton>
        </form>
      </IonContent>
      <Tabbar/>
    </IonPage>
  );
};

export default Feedback;
