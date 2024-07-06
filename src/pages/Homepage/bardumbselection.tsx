import {
  IonPage,
  IonHeader,
  IonContent,
  IonText,
  IonIcon,
  IonToolbar,
  IonRow,
  IonCard,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import exercises, { Exercise } from "./dumbbel";

const BarDumbSelection: React.FC = () => {
  const history = useHistory();
  const { group, exerciseName } = useParams<{
    group: string;
    exerciseName: string;
  }>();

  useEffect(() => {
    console.log("Group:", group);
    console.log("Exercise Name:", exerciseName);
    console.log("Exercises:", exercises);
  }, [group, exerciseName]);

  const exercise: Exercise | undefined = exercises[group]?.exercises.find(
    (ex) => ex.name === exerciseName
  );

  useEffect(() => {
    console.log("Selected Exercise:", exercise);
  }, [exercise]);

  if (!exercise) {
    return (
      <IonPage>
        <IonHeader className="ion-no-border border-b-[1px]">
          <IonToolbar>
            <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
              <div className="flex flex-row items-center">
                <div className="w-[20px] h-[20px]">
                  <IonIcon
                    src={chevronBackOutline}
                    className="w-6 h-6"
                    onClick={() => history.goBack()}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center flex-grow">
                <IonText className="text-lg font-bold">Error</IonText>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>Exercise not found</IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border border-b-[1px]">
        <IonToolbar>
          <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
            <div className="flex flex-row items-center">
              <div className="w-[20px] h-[20px]">
                <IonIcon
                  src={chevronBackOutline}
                  className="w-6 h-6"
                  onClick={() => history.goBack()}
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center flex-grow">
              <IonText className="text-lg font-bold">{exercise.name}</IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="p-2">
          {exercise.equipment.map((equip, index) => (
            <IonCard className="w-full mb-2" key={index}>
              <div className="px-2 py-2 space-y-1">
                <h1 className="text-sm font-bold text-center">{equip}</h1>
              </div>
            </IonCard>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default BarDumbSelection;
