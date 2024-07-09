// BarbellExercisesList.tsx
import React from "react";
import exercises, { Exercise } from "./dumbbel"; // Adjust the import path based on your project structure
import {
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

const BarbellExercisesList: React.FC = () => {
  const history = useHistory();

  // Filter exercises that use barbells
  const barbellExercises: Exercise[] = Object.keys(exercises).flatMap(
    (muscleGroupKey) =>
      exercises[muscleGroupKey as keyof typeof exercises].exercises.filter(
        (exercise) => exercise.equipment.includes("barbell")
      )
  );

  const handleCardClick = (exerciseName: string) => {
    history.push(`/exercise/${exerciseName}`);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border border-b-[1px]">
        <IonToolbar>
          <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
            <div className="flex flex-row items-center">
              <div className="w-[20px] h-[20px]">
                <a onClick={() => history.goBack()}>
                  <IonIcon src={chevronBackOutline} className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center flex-grow">
              <a>
                <IonText className="text-lg font-bold">
                  Barbell Exercises
                </IonText>
              </a>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="p-2">
          {barbellExercises.map((exercise, index) => (
            <IonCard key={index} className="shadow-md" onClick={() => handleCardClick(exercise.name)}>
              <div>
                {exercise.imageUrl &&
                  typeof exercise.imageUrl === "object" &&
                  exercise.imageUrl.barbell && (
                    <IonImg
                      src={exercise.imageUrl.barbell}
                      className="w-full h-32 object-cover rounded filter brightness-50"
                    />
                  )}
                <div className="px-2 py-2 space-y-1">
                  <h1 className="text-sm font-bold">{exercise.name}</h1>
                  <p className="text-xs font-light">{exercise.description}</p>
                </div>
              </div>
            </IonCard>
          ))}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default BarbellExercisesList;
