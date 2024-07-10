import React from "react";
import { RouteComponentProps } from "react-router";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import exercises from "./dumbbel"; // Adjust the import path based on your project structure
import { useHistory } from "react-router";
import "tailwindcss/tailwind.css";

interface ExerciseDetailPageProps
  extends RouteComponentProps<{ name: string }> {}

const ExerciseDetail: React.FC<ExerciseDetailPageProps> = ({ match }) => {
  const history = useHistory();
  const exerciseName = match.params.name;

  // Find the exercise details based on the exercise name from the URL parameter
  const exercise = Object.values(exercises)
    .flatMap((group) => group.exercises)
    .find((ex) => ex.name === exerciseName);

  if (!exercise) {
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
                    Excersize Not Found!
                  </IonText>
                </a>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRow className="justify-center items-center">
            <IonText className="text-center ">
              Sorry, we couldn't find the exercise you were looking for.
            </IonText>
          </IonRow>
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
                <a onClick={() => history.goBack()}>
                  <IonIcon src={chevronBackOutline} className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center flex-grow">
              <a>
                <IonText className="text-lg font-bold">{exercise.name}</IonText>
              </a>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="p-4">
        <IonCard className="mb-4">
          <IonCardHeader>
            <IonCardTitle>{exercise.name}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="mb-4">
              {exercise.imageUrl &&
                typeof exercise.imageUrl === "object" &&
                exercise.imageUrl.dumbbell && (
                  <img
                    src={exercise.imageUrl.dumbbell}
                    alt={exercise.name}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                )}
              <IonText className="text-xl font-semibold mb-4 block">
                {exercise.description}
              </IonText>
            </div>
          </IonCardContent>
        </IonCard>
        {exercise.detailedDescription.map((detail, index) => (
          <IonCard key={index} className="mb-4">
            <IonCardHeader>
              <IonCardTitle>{detail.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {detail.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-2">
                  <IonText className="text-md font-semibold mb-1 block">
                    {section.subtitle}
                  </IonText>
                  <ul className="list-disc list-inside pl-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </IonCardContent>
          </IonCard>
        ))}
        <IonCard className="mb-4">
          <IonCardHeader>
            <IonCardTitle>Video Tutorial</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md mb-4">
              <iframe
                src={exercise.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={exercise.name}
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard className="mb-4">
          <IonCardHeader>
            <IonCardTitle>Targeted Muscles</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <img
              src={exercise.anatomyImage}
              alt="Targeted Muscles"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
