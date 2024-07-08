import { IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import { menuOutline } from "ionicons/icons";
import React from "react";
import AdminSidebar from "../../component/AdminSidebar";

const dashboard: React.FC = () => {
  return (
        <>
      <AdminSidebar />
    <IonPage id="sidebarmenu">
      <IonHeader>
        <IonHeader className="ion-no-border shadow-none">
          <IonToolbar color="bg-primary" className="pt-8 text-primary">
            <div className="flex flex-cols justify-between items-center px-2">
              <IonRow>Welcome, Admin</IonRow>
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
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonText>Display Feedback Here</IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    </>
  );
};

export default dashboard;
