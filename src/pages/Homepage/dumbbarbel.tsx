import {
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
} from "@ionic/react";
import React from "react";

const dumbbarbel: React.FC = () => {
  return (
    <IonPage>
      <IonHeader></IonHeader>
      <IonContent>
        <IonCol size="6">
          <div className="flex flex-col items-center text-center">
            <IonCard
              // onClick={() => history.push(`/muscle-group/${group.id}`)}
              className="relative w-full h-[100px] overflow-hidden"
            >
              {/* <IonImg
                src={group.imageUrl}
                alt={group.name}
                className="absolute inset-0 w-full h-full object-cover filter brightness-50"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <IonText className="text-white text-sm font-bold">
                  Dumbel
                </IonText>
              </div>
            </IonCard>
          </div>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default dumbbarbel;
