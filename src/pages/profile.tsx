import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react'
import React from 'react'

const profile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-no-border '>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonCol>
            <IonRow>
              <IonText>
                <h1 className='text-dark'>Profile</h1>
              </IonText>
            </IonRow>
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default profile
