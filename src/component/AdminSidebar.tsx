import {
  IonMenu,
  IonContent,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
} from "@ionic/react";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import {
  calculatorOutline,
  chevronForwardOutline,
  journalOutline,
} from "ionicons/icons";
import { signOutUser } from "../firebase/firebase";

const AdminSidebar = () => {
  const history = useHistory();
  const menuRef = useRef<HTMLIonMenuElement>(null);

  const navigateAndCloseMenu = (path: string) => {
    if (menuRef.current) {
      menuRef.current.close();
    }
    history.push(path);
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigateAndCloseMenu("/homepage");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <IonMenu
      contentId="adminsidebarmenublablabla"
      side="start"
      menuId="first"
      ref={menuRef}
    >
      <IonContent className="ion-padding flex flex-col h-full">
        <div className="mt-auto">
          <a className="" onClick={handleSignOut}>
            <IonRow className="items-center">
              <IonCol size="1">
                <IonIcon className="w-4 h-4" src={calculatorOutline} />
              </IonCol>
              <IonCol size="8" className="flex items-center space-x-2">
                <IonText className="text-dark">
                  <p className="font-bold ">Sign Out</p>
                  <p className="font-light text-xs">Log out to homepage</p>
                </IonText>
              </IonCol>
              <IonCol size="3" className="flex justify-end">
                <IonIcon className="w-4 h-4" src={chevronForwardOutline} />
              </IonCol>
            </IonRow>
          </a>
        </div>
      </IonContent>
    </IonMenu>
  );
};

export default AdminSidebar;
