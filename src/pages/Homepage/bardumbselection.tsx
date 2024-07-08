import {
  IonPage,
  IonHeader,
  IonContent,
  IonText,
  IonIcon,
  IonToolbar,
  IonRow,
  IonCard,
  IonCol,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";

const BarDumbSelection: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(
    null
  );
  const history = useHistory();
  const { group } = useParams<{ group: string }>();

  const handleCardClick = (equipment: string) => {
    setSelectedEquipment(equipment);
    history.push(`/musclegroup/${group}/${equipment}`);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border border-b-[1px]">
        <IonToolbar>
          <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
            <div className="flex flex-row items-center">
              <IonIcon
                src={chevronBackOutline}
                className="w-6 h-6"
                onClick={() => history.goBack()}
              />
            </div>
            <div className="flex-grow flex justify-center items-center">
              <IonText className="text-lg font-bold">Select Equipment</IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="p-2">
          <IonCol size="12">
            <IonCard
              className={`shadow-none border-[1px] ${
                selectedEquipment === "Barbell" ? "border-secondary" : ""
              }`}
              onClick={() => handleCardClick("Barbell")}
            >
              <div className="px-2 py-2 space-y-1">
                <h1 className="text-sm font-bold text-center">Barbell</h1>
              </div>
            </IonCard>
            <IonCard
              className={`shadow-none border-[1px] ${
                selectedEquipment === "Dumbbell" ? "border-secondary" : ""
              }`}
              onClick={() => handleCardClick("Dumbbell")}
            >
              <div className="px-2 py-2 space-y-1">
                <h1 className="text-sm font-bold text-center">Dumbbell</h1>
              </div>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default BarDumbSelection;
