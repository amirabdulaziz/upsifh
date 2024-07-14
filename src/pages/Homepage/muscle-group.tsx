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
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import exercises, { Exercise } from "./dumbbel";

const MuscleGroupPage: React.FC = () => {
  const history = useHistory();
  const { group, equipment } = useParams<{
    group: string;
    equipment: string;
  }>();

  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    if (exercises[group]) {
      console.log(exercises[group].exercises);
    //   function to normalize parameters to lowercase. Check at homepage
      const normalizedEquipment = equipment.toLowerCase(); 
      const filtered = exercises[group].exercises.filter((exercise: Exercise) =>
        exercise.equipment.includes(normalizedEquipment)
      );
      console.log(filtered);
      setFilteredExercises(filtered);
    } else {
      setFilteredExercises([]);
    }
  }, [group, equipment]);

  const handleCardClick = (exercise: Exercise) => {
        history.push(`/exercise/${exercise.name}/${equipment}`);

  };


  return (
    <IonPage>
      <IonHeader className="ion-no-border border-b-[1px]">
        <IonToolbar>
          <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
            <IonIcon
              src={chevronBackOutline}
              className="w-6 h-6"
              onClick={() => history.goBack()}
            />
            <div className="flex-grow flex justify-center items-center">
              <IonText className="text-lg font-bold">
                {group.charAt(0).toUpperCase() + group.slice(1)} Exercises with{" "}
                {equipment}
              </IonText>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow className="p-2">
          {filteredExercises.length > 0 ? (
            filteredExercises.map((exercise, index) => (
              <IonCol size="12" key={index}>
                <IonCard
                  className="shadow-none border-[1px]"
                  onClick={() => handleCardClick(exercise)}
                >
                  <div className="px-2 py-2 space-y-1">
                    <h1 className="text-sm font-bold text-center">
                      {exercise.name}
                    </h1>
                  </div>
                </IonCard>
              </IonCol>
            ))
          ) : (
            <IonCol size="12">
              <IonText className="text-center">No exercises found.</IonText>
            </IonCol>
          )}
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default MuscleGroupPage;
