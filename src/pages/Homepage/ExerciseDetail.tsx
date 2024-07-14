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
  IonCol,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import exercises from "./dumbbel";
import { useHistory } from "react-router";
import "tailwindcss/tailwind.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExerciseDetailPageProps
  extends RouteComponentProps<{ name: string; equipment: string }> {}

const ExerciseDetail: React.FC<ExerciseDetailPageProps> = ({ match }) => {
  const history = useHistory();
  const { name, equipment } = match.params;

  // Find the exercise details based on the exercise name from the URL parameter
  const exercise = Object.values(exercises)
    .flatMap((group) => group.exercises)
    .find((ex) => ex.name === name);

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
                    Exercise Not Found!
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

  const exerciseImageUrl =
    typeof exercise.imageUrl === "object"
      ? exercise.imageUrl[equipment]
      : exercise.imageUrl;

  console.log("Exercise Image URL:", exerciseImageUrl);

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
      <IonContent>
        <IonRow className="px-2">
          <div className="py-4">
            {exerciseImageUrl && (
              <img
                src={exerciseImageUrl}
                alt={exercise.name}
                className="w-full h-auto rounded-md"
              />
            )}

            

            <div className="text-md font-bold mt-2">{exercise.name}</div>
            <IonText className="text-xs block">{exercise.description}</IonText>
          </div>
        </IonRow>
        <IonRow className="px-2">
          {exercise.detailedDescription.map((detail, index) => (
            <div key={index} className="mb-4">
              <div className="text-md font-bold">{detail.title}</div>

              {detail.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-2">
                  <IonText className="text-sm font-bold mt-2 mb-1 block">
                    {section.subtitle}
                  </IonText>
                  <ul className="list-disc list-inside pl-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-1 text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </IonRow>
        <IonCol className="space-y-1">
          <IonRow className="px-2">
            <IonText className="text-sm font-bold ">Video Tutorial</IonText>
          </IonRow>
          <IonRow className="px-2">
            <IonText className="text-xs">Checkout The Video Tutorial!</IonText>
          </IonRow>
        </IonCol>
        <div className="px-2">
          {" "}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-sm">
            <iframe
              src={exercise.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={exercise.name}
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
        <IonRow className="px-2 pt-2">
          <IonText className="py-2 text-sm font-bold">Targeted Muscles</IonText>
        </IonRow>
        <IonRow className="px-2 justify-center items-center pb-10">
          <img
            src={exercise.anatomyImage}
            alt="Targeted Muscles"
            className="w-60 h-60"
          />
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
