import {
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { menuOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import Sidebar from "../../component/Sidebar";

const homepage: React.FC = () => {
  return (
    <>
      <Sidebar />

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
          <IonGrid>
            <IonCol>
              <IonText>
                <h1 className="text-dark text-center">
                  WELCOME TO UPSI FH: FITNESS HELPER
                </h1>
              </IonText>
            </IonCol>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Barbell</h1>
              </IonCol>
              <IonCol size="2">
                <h1 className="text-dark text-xs">View More</h1>
              </IonCol>
              <IonCard></IonCard>
            </IonRow>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Dumbell</h1>
              </IonCol>
              <IonCol size="2">
                <h1 className="text-dark text-xs">View More</h1>
              </IonCol>
              <IonCard></IonCard>
            </IonRow>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Body parts</h1>
              </IonCol>
              <IonCard></IonCard>
            </IonRow>
          </IonGrid>
        </IonContent>
        <Tabbar />
      </IonPage>
    </>
  );
};

export default homepage;
