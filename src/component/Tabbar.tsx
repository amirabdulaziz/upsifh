import React from "react";
import { IonTabBar, IonTabButton, IonIcon, IonText } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import { homeOutline, journalOutline, calculatorOutline } from "ionicons/icons";

const Tabbar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const getButtonColor = (path: string) =>
    location.pathname === path ? "#D4C685" : "";

  return (
    <IonTabBar slot="bottom">
      <IonTabButton
        tab="home"
        onClick={() => history.push("/homepage")}
        style={{ color: getButtonColor("/homepage") }}
      >
        <IonIcon icon={homeOutline} />
        <IonText>
          <p className="text-xs">Homepage</p>
        </IonText>
      </IonTabButton>
      <IonTabButton
        tab="feedback"
        onClick={() => history.push("/feedback")}
        style={{ color: getButtonColor("/feedback") }}
      >
        <IonIcon icon={journalOutline} />
        <IonText>
          <p className="text-xs">Feedback</p>
        </IonText>
      </IonTabButton>
      <IonTabButton
        tab="bmi"
        onClick={() => history.push("/bmi")}
        style={{ color: getButtonColor("/bmi") }}
      >
        <IonIcon icon={calculatorOutline} />
        <IonText>
          <p className="text-xs">BMI</p>
        </IonText>
      </IonTabButton>
    </IonTabBar>
  );
};

export default Tabbar;
