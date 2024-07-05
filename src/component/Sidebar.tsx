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

const Sidebar = () => {
  const history = useHistory();
  const menuRef = useRef<HTMLIonMenuElement>(null);

  const navigateAndCloseMenu = (path: string) => {
    if (menuRef.current) {
      menuRef.current.close();
    }
    history.push(path);
  };

  return (
    <IonMenu contentId="sidebarmenu" side="start" menuId="first" ref={menuRef}>
      <IonContent className="ion-padding flex flex-col h-full">
        <div className="flex-grow">
          <a className="" onClick={() => navigateAndCloseMenu("/feedback")}>
            <IonRow className="items-center">
              <IonCol size="1">
                <IonIcon className="w-4 h-4" src={journalOutline} />
              </IonCol>
              <IonCol size="8" className="flex items-center space-x-2">
                <IonText className="text-dark">
                  <p className="font-bold">Feedback</p>
                  <p className="font-light text-xs">
                    Share your feedback here!
                  </p>
                </IonText>
              </IonCol>
              <IonCol size="3" className="flex justify-end">
                <IonIcon className="w-4 h-4" src={chevronForwardOutline} />
              </IonCol>
            </IonRow>
          </a>
          <a className="" onClick={() => navigateAndCloseMenu("/bmi")}>
            <IonRow className="items-center">
              <IonCol size="1">
                <IonIcon className="w-4 h-4" src={calculatorOutline} />
              </IonCol>
              <IonCol size="8" className="flex items-center space-x-2">
                <IonText className="text-dark">
                  <p className="font-bold">BMI</p>
                  <p className="font-light text-xs">Calculate Your BMI</p>
                </IonText>
              </IonCol>
              <IonCol size="3" className="flex justify-end">
                <IonIcon className="w-4 h-4" src={chevronForwardOutline} />
              </IonCol>
            </IonRow>
          </a>
        </div>
        <div className="mt-auto">
          <a className="" onClick={() => navigateAndCloseMenu("/adminlogin")}>
            <IonRow className="items-center">
              <IonCol size="1">
                <IonIcon className="w-4 h-4" src={calculatorOutline} />
              </IonCol>
              <IonCol size="8" className="flex items-center space-x-2">
                <IonText className="text-dark">
                  <p className="font-bold ">Admin Login</p>
                  <p className="font-light text-xs">Admin Login Page</p>
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

export default Sidebar;
