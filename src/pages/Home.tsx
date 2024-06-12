import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
// import MainPage from "../component/MainPage";

import FitnesHome from "../assets/homeimg/fitneshome.svg";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>{/* Toolbar content (if any) */}</IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col justify-center items-center h-full relative">
          <div className="flex flex-col justify-center items-center">
            <IonImg src={FitnesHome} className="mb-4 h-[240px] w-[240px]" />
            <IonText className="text-black text-center font-bold space-y-1 py-2">
              <h2 className="text-2xl">Welcome to UPSIFH</h2>
              <p className="font-semibold text-sm">Your fitness Helper</p>
            </IonText>
          </div>
          <div className="w-full absolute bottom-4 px-4">
            <button
              onClick={() => history.push("/profile")}
              className="bg-[#D4C685] rounded-lg shadow-md px-2 py-2 h-10 w-full"
            >
              <IonText className="text-white">
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
import { useHistory } from "react-router-dom";