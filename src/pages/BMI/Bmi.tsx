import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCol,
  IonText,
  IonGrid,
  IonRow,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonImg,
} from "@ionic/react";
import Tabbar from "../../component/Tabbar";
import Sidebar from "../../component/Sidebar";
import { menuOutline } from "ionicons/icons";
import HomeImg from "../../assets/homeimg/homepageimg.svg";

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

    // Reset input fields
    setHeight("");
    setWeight("");
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

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  return (
    <>
      <Sidebar />
      <IonPage id="sidebarmenu">
        <IonHeader className="ion-no-border shadow-none">
          <IonToolbar color="bg-primary" className="pt-8 text-primary">
            <div className="flex flex-cols justify-between items-center px-2">
              <div className="flex flex-row justify-center items-center flex-grow">
                <a>
                  <IonText className="text-lg font-bold text-tertiary">
                    Body Mass Index Calculator
                  </IonText>
                </a>
              </div>
              <IonRow>
                <IonIcon
                  style={{ color: "white" }}
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
            <IonRow className="p-4 flex justify-center pt-6">
              <IonImg src={HomeImg} className="w-[240px] h-[240px]" />
            </IonRow>
            <IonCol className="flex flex-col justify-center items-center space-y-2">
              {/* <IonRow className="w-full flex justify-center">
                <IonText className="text-center text-4xl font-bold">
                  Body Mass Index Calculator
                </IonText>
              </IonRow> */}
              <IonRow className="w-full flex justify-center">
                <IonText className="text-center text-sm text-tertiary">
                  Track Your BMI!
                </IonText>
              </IonRow>
            </IonCol>
            <IonRow className="px-2 space-y-2">
              <label className="text-sm">Height (cm)</label>
              <input
                type="number"
                className="focus:outline-none text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                value={height}
                onChange={handleHeightChange}
                required
              />

              <label className="text-sm">Weight (kg)</label>
              <input
                type="number"
                className="focus:outline-none text-sm peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                value={weight}
                onChange={handleWeightChange}
                required
              />

              <button
                onClick={calculateBmi}
                className="text-sm text-tertiary font-semibold custom-button h-[40px] md:h-[50px] bg-[#D4C685] w-full justify-center items-center border rounded-lg shadow-lg mb-4"
              >
                Calculate BMI
              </button>
            </IonRow>
            <IonRow className="p-2">
              <div className="w-full mt-4 p-4 shadow-none border-[1px] border-secondary rounded-md">
                <IonText className="text-sm font-semibold">
                  <h2>
                    Your BMI:{" "}
                    {bmi && (
                      <span className="text-secondary">{bmi.toFixed(2)}</span>
                    )}
                  </h2>
                </IonText>
                <IonText className="text-sm">
                  <h3>Category: {bmi && <span>{bmiCategory}</span>}</h3>
                </IonText>
              </div>
            </IonRow>
          </IonGrid>
        </IonContent>
        <Tabbar />
      </IonPage>
    </>
  );
};

export default Bmi;
