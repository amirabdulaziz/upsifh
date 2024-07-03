import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import React from "react";

const homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default homepage;
