import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Workout from "../assets/workout.webp";
import FitnesHome from "../assets/homeimg/fitneshome.svg";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className="">
      <IonContent className="bg-image">
        <div className="flex flex-col h-full bg-black bg-opacity-50 relative">
          <div className="absolute bottom-[100px] left-0 p-4">
            <IonText className="text-white text-left font-bold space-y-1 py-2">
              <h2 className="text-4xl">
                Discover <br></br>UPSIFH: Fitness Helper
              </h2>
              <p className="font-light text-sm">
                Elevate your fitness game with barbell and dumbbell <br></br>
                workouts designed for results.
              </p>
            </IonText>
          </div>
          <div className="w-full absolute bottom-10 px-4">
            <button
              onClick={() => history.push("/homepage")}
              className="bg-[#D4C685] rounded-lg shadow-md px-2 py-2 h-10 w-full"
            >
              <IonText className="text-white font-bold">
                <p className="lowercase">Get started now</p>
              </IonText>
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
