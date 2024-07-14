import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { menuOutline, chevronForwardOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import Sidebar from "../../component/Sidebar";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Pagination } from "swiper/modules";
import exercises, { Exercise, MuscleGroup } from "./dumbbel";
import Lottie from "lottie-react";
import HomepageLottie from "../../assets/LottieFile/homepagelottie.json";
import HomeImg from "../../assets/personaltrainer.svg";

const Homepage: React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState<string | null>("");

  // Extracting muscle group names and their corresponding images
  const muscleGroups = Object.keys(exercises).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    imageUrl: exercises[key as keyof typeof exercises].image,
  }));

  // Filter exercises based on equipment type
  const barbellExercises: Exercise[] = [];
  const dumbbellExercises: Exercise[] = [];

  Object.values(exercises).forEach((group) => {
    group.exercises.forEach((exercise) => {
      if (exercise.equipment.includes("barbell")) {
        barbellExercises.push({
          name: exercise.name,
          imageUrl:
            typeof exercise.imageUrl === "string"
              ? exercise.imageUrl
              : exercise.imageUrl?.barbell || "", 
          equipment: exercise.equipment,
          description: exercise.description || "", 
          detailedDescription: exercise.detailedDescription || "", 
          videoUrl: exercise.videoUrl || "", 
          anatomyImage: exercise.anatomyImage || "", 
        });
      }
      if (exercise.equipment.includes("dumbbell")) {
        dumbbellExercises.push({
          name: exercise.name,
          imageUrl:
            typeof exercise.imageUrl === "string"
              ? exercise.imageUrl
              : exercise.imageUrl?.dumbbell || "", 
          equipment: exercise.equipment,
          description: exercise.description || "", 
          detailedDescription: exercise.detailedDescription || "", 
          videoUrl: exercise.videoUrl || "", 
          anatomyImage: exercise.anatomyImage || "", 
        });
      }
    });
  });

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <>
      <Sidebar />
      <IonPage id="sidebarmenu">
        <IonHeader className="ion-no-border shadow-none">
          <IonToolbar color="bg-primary" className="pt-8 text-primary">
            <div className="flex flex-cols justify-between items-center px-2">
              <IonRow>
                <IonText>
                  <p className="text-sm text-tertiary">
                    Welcome,{" "}
                    <span className="text-sm font-bold">{userName}</span>
                  </p>{" "}
                </IonText>
              </IonRow>
              <IonRow>
                <IonIcon
                color="#ffffff"
                  icon={menuOutline}
                  className="h-10 w-6"
                  onClick={() => {
                    const menu = document.querySelector(
                      'ion-menu[menu-id="first"]'
                    ) as HTMLIonMenuElement;
                    menu?.open();
                  }}
                ></IonIcon>
              </IonRow>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow className="p-4">
              <IonCol size="8" className="mt-2">
                <IonText className="text-2xl ">
                  <p className="font-light">
                    Start Your <br></br> Fitness{" "}
                    <span className="font-bold"> Journey</span>
                  </p>
                </IonText>
              </IonCol>
              <IonCol size="4">
                <IonImg src={HomeImg} className="w-30 h-30" />
              </IonCol>
            </IonRow>
            <IonRow>
              <h1 className="text-dark font-bold text-sm px-2 mt-2">
                Body parts
              </h1>
            </IonRow>
            <IonRow className="">
              {muscleGroups.map((group, index) => (
                <IonCol size="2" key={index} className="">
                  {" "}
                  {/* Add margin here */}
                  <div className="flex flex-col items-center text-center">
                    <IonCard
                      className="relative w-[60px] h-[60px] rounded-full overflow-hidden shadow-none"
                      onClick={() =>
                        history.push(
                          `/bardumbselection/${group.name.toLowerCase()}`
                        )
                      }
                    >
                      <IonImg
                        src={group.imageUrl}
                        alt={group.name}
                        className="absolute inset-0 w-full h-full object-cover "
                      />
                    </IonCard>
                    <div className="text-center">
                      <IonText className="text-dark text-xs font-bold">
                        {group.name.charAt(0).toUpperCase() +
                          group.name.slice(1)}
                      </IonText>
                    </div>
                  </div>
                </IonCol>
              ))}
            </IonRow>

            <IonRow className="mt-2">
              <IonCol size="9">
                <h1 className="text-dark text-sm font-bold">Barbell</h1>
              </IonCol>
              <IonCol size="3">
                <h1
                  onClick={() => history.push("/barbelllist")}
                  className="text-secondary text-right text-xs"
                >
                  View More
                </h1>
              </IonCol>
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                loop={false}
                pagination={{ clickable: false }}
              >
                {barbellExercises.slice(0, 4).map((exercise, index) => (
                  <SwiperSlide key={index} className="rounded-md">
                    <IonCard
                      className="w-full h-40 object-cover rounded filter brightness-40"
                      onClick={() =>
                        history.push(`/exercise/${exercise.name}/barbell`)
                      }
                    >
                      <IonImg
                        src={
                          typeof exercise.imageUrl === "string"
                            ? exercise.imageUrl
                            : ""
                        }
                        className="w-full h-40 object-cover rounded filter brightness-50"
                      />
                      <div className="absolute bottom-2 left-2 flex flex-col items-start text-left">
                        <IonText className="text-white text-lg">
                          {exercise.name}
                        </IonText>
                        <IonText className="flex items-center text-tertiary pb-1 text-xs mt-2">
                          <p className="mr-1 text-[10px]">View Details</p>
                          <IonIcon
                            icon={chevronForwardOutline}
                            style={{ color: "#ffffff" }}
                            className="h-4 w-4"
                          />
                        </IonText>
                      </div>
                    </IonCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonRow>
            <IonRow className="mt-2">
              <IonCol size="9">
                <h1 className="text-dark text-sm font-bold">Dumbbell</h1>
              </IonCol>
              <IonCol size="3">
                <h1
                  onClick={() => history.push("/dumbellList")}
                  className="text-secondary text-right text-xs"
                >
                  View More
                </h1>
              </IonCol>
            </IonRow>
            <IonRow className="">
              {dumbbellExercises.slice(0, 4).map((exercise, index) => (
                <IonCard
                  key={index}
                  className="w-full shadow-md relative"
                  onClick={() =>
                    history.push(`/exercise/${exercise.name}/dumbbell`)
                  }
                >
                  <IonImg
                    src={
                      typeof exercise.imageUrl === "string"
                        ? exercise.imageUrl
                        : ""
                    }
                    className="w-full h-40 object-cover rounded filter brightness-50"
                  />
                  <div className="absolute bottom-1 left-2 flex flex-col items-start text-left">
                    <IonText className="text-white text-lg">
                      {exercise.name}
                    </IonText>
                    <IonText className="flex items-center text-tertiary pb-1 text-xs mt-2">
                      <p className="mr-1 text-[10px]">View Details</p>
                      <IonIcon
                        icon={chevronForwardOutline}
                        style={{ color: "#ffffff" }}
                        className="h-4 w-4"
                      />
                    </IonText>
                  </div>
                </IonCard>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
        <Tabbar />
      </IonPage>
    </>
  );
};

export default Homepage;

