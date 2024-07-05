import {
  IonContent,
  IonHeader,
  IonPage,
  IonCol,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import "./Bmi.css"; // Importing custom CSS
import Tabbar from "../../component/Tabbar";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const calculateBmi = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
    categorizeBmi(bmiValue);
  };

  const categorizeBmi = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiCategory("Overweight");
    } else {
      setBmiCategory("Obesity");
    }
  };

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonCol>
              <IonText>
                <h1 className="text-dark text-center">
                  WELCOME TO UPSI FH: BMI Calculater
                </h1>
              </IonText>
            </IonCol>
        <form>
          <IonItem>
            <IonLabel position="stacked">Height (cm)</IonLabel>
            <IonInput
              type="number"  className="input-box"
              value={height}
              onIonChange={(e) => setHeight(e.detail.value!)}
              required
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Weight (kg)</IonLabel>
            <IonInput
              type="number"  className="input-box"
              value={weight}
              onIonChange={(e) => setWeight(e.detail.value!)}
              required
            />
          </IonItem>
          <IonButton
            expand="block"
            onClick={calculateBmi}
            className="calculate-button"
          >
            Calculate BMI
          </IonButton>
        </form>
        {bmi && (
          <div className="bmi-result">
            <IonText color="primary">
              <h2>Your BMI: {bmi.toFixed(2)}</h2>
            </IonText>
            <IonText>
              <h3>Category: {bmiCategory}</h3>
            </IonText>
          </div>
        )}
      </IonContent>
      <Tabbar/>
    </IonPage>
  );
};

export default Bmi;
