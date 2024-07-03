import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { menuOutline, chevronForwardCircleOutline, chevronForwardOutline } from "ionicons/icons";
import Tabbar from "../../component/Tabbar";
import Sidebar from "../../component/Sidebar";
import { useHistory } from "react-router-dom";
import muscleGroups from "./muscleGroups";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Pagination } from "swiper/modules";
import barbell from "./Barbel";

const homepage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Sidebar />

      <IonPage id="sidebarmenu">
        <IonHeader className="ion-no-border shadow-none ">
          <IonToolbar className="px-2 ">
            <div className="flex flex-cols justify-between items-center">
              <IonRow>Welcome</IonRow>
              <IonRow>
                {/* <IonIcon src={menuOutline} className="w-6 h-6" /> */}
                <IonIcon
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
            <IonCol>
              <IonText>
                <h1 className="text-dark text-center">
                  WELCOME TO UPSI FH: FITNESS HELPER
                </h1>
              </IonText>
            </IonCol>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Barbell</h1>
              </IonCol>
              <IonCol size="2">
                <h1 className="text-dark text-xs">View More</h1>
              </IonCol>
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
              >
                {barbell.map((exercise) => (
                  <SwiperSlide key={exercise.id}>
                    <IonImg
                      src={exercise.imageUrl}
                      className="w-full h-40 object-cover rounded"
                    />
                    <div className="absolute bottom-2 left-2 flex flex-col items-start text-left">
                      {" "}
                      <IonText className="text-white text-lg">
                        {exercise.name}
                      </IonText>
                      <IonText
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("/");
                        }}
                        className="flex items-center text-tertiary py-1 text-xs mt-2"
                      >
                        <p className="mr-1">View Details</p>
                        <IonIcon
                          icon={chevronForwardOutline}
                          style={{ color: "#ffffff" }}
                          className="h-4 w-4 "
                        />
                      </IonText>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonRow>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Dumbell</h1>
              </IonCol>
              <IonCol size="2">
                <h1 className="text-dark text-xs">View More</h1>
              </IonCol>
              <Swiper
                slidesPerView={1.2}
                spaceBetween={10}
                loop={true}
                pagination={{ clickable: true }}
              >
                {barbell.map((exercise) => (
                  <SwiperSlide key={exercise.id}>
                    <IonImg
                      src={exercise.imageUrl}
                      className="w-full h-40 object-cover rounded"
                    />
                    <div className="absolute bottom-2 left-2 flex flex-col items-start text-left">
                      {" "}
                      <IonText className="text-white text-lg">
                        {exercise.name}
                      </IonText>
                      <IonText
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("/");
                        }}
                        className="flex items-center text-tertiary py-1 text-xs mt-2"
                      >
                        <p className="mr-1">View Details</p>
                        <IonIcon
                          icon={chevronForwardOutline}
                          style={{ color: "#ffffff" }}
                          className="h-4 w-4 "
                        />
                      </IonText>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonRow>
            <IonRow>
              <IonCol size="10">
                <h1 className="text-dark text-sm">Body parts</h1>
              </IonCol>
            </IonRow>{" "}
            <IonRow>
              {muscleGroups.map((group) => (
                <IonCol size="6" key={group.id}>
                  <div className="flex flex-col items-center text-center">
                    <IonCard
                      onClick={() => history.push(`/muscle-group/${group.id}`)}
                      className="relative w-full h-[100px] overflow-hidden"
                    >
                      <IonImg
                        src={group.imageUrl}
                        alt={group.name}
                        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IonText className="text-white text-sm font-bold">
                          {group.name}
                        </IonText>
                      </div>
                    </IonCard>
                  </div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
        <Tabbar />
      </IonPage>
    </>
  );
};

export default homepage;
