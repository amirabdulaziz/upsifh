import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonText,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useHistory, useLocation } from "react-router-dom";
import { Route, Redirect } from "react-router";

import {
  playCircle,
  radio,
  library,
  search,
  homeOutline,
  journalOutline,
  calculatorOutline
} from "ionicons/icons";

const Tabbar: React.FC = () => {
  const history = useHistory();

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" onClick={() => history.push("/homepage")}>
        <IonIcon icon={homeOutline} />
        <IonText>
          <p className="text-xs">Homepage</p>
        </IonText>
      </IonTabButton>
      <IonTabButton tab="feedback" onClick={() => history.push("/feedback")}>
        <IonIcon icon={journalOutline} />
        <IonText>
          <p className="text-xs">Feedback</p>
        </IonText>
      </IonTabButton>
      <IonTabButton tab="bmi" onClick={() => history.push("/bmi")}>
        <IonIcon icon={calculatorOutline} />
        <IonText>
          <p className="text-xs">BMI</p>
        </IonText>
      </IonTabButton>
    </IonTabBar>
  );
};
export default Tabbar;
