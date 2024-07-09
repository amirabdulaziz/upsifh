import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import exercises from './dumbbel'; // Adjust the import path based on your project structure
import { useHistory } from 'react-router';
import parse from 'html-react-parser';
import './ExerciseDetail.css'; // Import the CSS file for styling

interface ExerciseDetailPageProps extends RouteComponentProps<{ name: string }> {}

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
        <IonHeader>
          <IonToolbar>
            <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
              <div className="flex flex-row items-center">
                <div className="w-[20px] h-[20px]">
                  <a onClick={() => history.goBack()}>
                    <IonIcon src={chevronBackOutline} className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <IonTitle>Exercise Not Found</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>Sorry, we couldn't find the exercise you were looking for.</IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
            <div className="flex flex-row items-center">
              <div className="w-[20px] h-[20px]">
                <a onClick={() => history.goBack()}>
                  <IonIcon src={chevronBackOutline} className="w-6 h-6" />
                </a>
              </div>
            </div>
            <IonTitle>{exercise.name}</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          {exercise.imageUrl && typeof exercise.imageUrl === 'object' && exercise.imageUrl.dumbbell && (
            <img src={exercise.imageUrl.dumbbell} alt={exercise.name} />
          )}
          <p>{exercise.description}</p>
          <div>{parse(exercise.detailedDescription)}</div>
          <div>
            <h1>Video Tutorial</h1>
            <div className="video-container">
              <iframe
                src={exercise.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={exercise.name}
              ></iframe>
            </div>
          </div>
          <div>
            <h2>Targeted Muscles</h2>
            <img src={exercise.anatomyImage} alt="Targeted Muscles" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
