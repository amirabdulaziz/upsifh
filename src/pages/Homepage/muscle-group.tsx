import {
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import exercises, { Exercise } from "./dumbbel";

const MuscleGroupPage: React.FC = () => {
  const history = useHistory();
  const { group } = useParams<{ group: string }>();

  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const handleCardClick = (exercise: Exercise) => {
    setSelectedExercise(exercise.name);
    console.log(exercise.name);
    history.push(`/bardumbselection/${group}/${exercise.name}`);
  };

  const filteredExercises: Exercise[] = [];
  if (exercises[group]) {
    exercises[group].exercises.forEach((exercise: Exercise) => {
      const imageUrl =
        typeof exercise.imageUrl === "string"
          ? exercise.imageUrl
          : exercise.imageUrl?.barbell || exercise.imageUrl?.dumbbell || "";
      filteredExercises.push({
        name: exercise.name,
        imageUrl,
        equipment: exercise.equipment,
        description: exercise.description || "",
      });
    });
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
              <IonText className="text-lg font-bold">
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="p-2">
          {filteredExercises.map((exercise, index) => (
            <IonCol size="12" key={index}>
              <IonCard
                className={`shadow-none border-[1px] ${
                  selectedExercise === exercise.name ? "border-secondary" : ""
                }`}
                onClick={() => handleCardClick(exercise)}
              >
                <div className="px-2 py-2 space-y-1">
                  <h1 className="text-sm font-bold text-center">
                    {exercise.name}
                  </h1>
                </div>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default MuscleGroupPage;
