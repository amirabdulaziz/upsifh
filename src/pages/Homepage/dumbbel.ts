import Arm from "../../assets/arm.jpg";
import Chest from "../../assets/chest.jpg";
import Legs from "../../assets/leg.jpg";
import Shoulders from "../../assets/shoulder.png";
import Back from "../../assets/back.jpg";
import All from "../../assets/all.webp";
import Abs from "../../assets/abs.webp";
import BarbelSquat from "../../assets/barbell squat.jpg";
import BarbelLift from "../../assets/barbelllift.jpg";
import DumbellDeadlift from "../../assets/dumbelldeadlift.jpg";
import BarbelBenchPress from "../../assets/barbellbenchpress.webp";
import BarbelRow from "../../assets/barbellbentoverrow.jpg";
import InclinePressBarbel from "../../assets/inclinepressbarbel.jpg";
import InclinePressDumbel from "../../assets/inclinepressdumbel.gif";
import DeclinePressBarbel from "../../assets/barbelldeclinepress.jpg";
import DeclinePressDumbel from "../../assets/dumbelldeclinepress.jpg";
import BarbelLunges from "../../assets/barbelllunges.jpg";
import Dumbellunges from "../../assets/dumbelllunges.jpg";
import Barbelsquat from "../../assets/barbellsquat.webp";
import Dumbelsquat from "../../assets/dumbelsquat.jpg";
import BarbelOneArmRow from "../../assets/barbellonearmrow.jpg";
import Barbelbentoverrow from "../../assets/barbellbentoverrow.jpg";
import Dumbelbentoverrow from "../../assets/dumbellbentoverrow.webp";
import Dumbelbicepcurl from "../../assets/dumbellbicepcurl.webp";
import Barbelbicepcurl from "../../assets/barbellbicepcurl.webp";
import DumbellTricepExtension from "../../assets/dumbelltricepextension.png";
import DumbbelHammerCurl from "../../assets/dumbellhammercurl.webp";
import DummbellRusianTwist from "../../assets/dumbell russian twist.webp";
import DumbbelStandingSideBench from "../../assets/dumbellstandindsidebenc.jpg";
import DumbelWeightSitUp from "../../assets/dumbelweightsitup.jpg";
import DumbelShoulderPress from "../../assets/dumbelshoulderpress.png";
import BarbelShoulderPress from "../../assets/barbelshoulderpress.jpg";
import DumbelLateralRaise from "../../assets/dumbellateralwaise.webp";
import DumbelDeltoidFly from "../../assets/dumbeldeltoidfly.webp";

export interface Exercise {
  name: string;
  equipment: string[];
  imageUrl?: string | { [key: string]: string };
  description: string;
}

export interface MuscleGroup {
  exercises: Exercise[];
  image: string;
}

interface MuscleGroups {
  [key: string]: MuscleGroup;
}

const exercises: { [key: string]: MuscleGroup } = {
  chest: {
    exercises: [
      {
        name: "bench press",
        equipment: ["barbell"],
        imageUrl: {
          barbell: BarbelBenchPress,
        },
        description:
          "A compound exercise that targets the chest, shoulders, and triceps by pressing a barbell away from the chest while lying on a bench.",
      },
      {
        name: "incline press",
        equipment: ["barbell", "dumbbell"],
        imageUrl: {
          barbell: InclinePressBarbel,
          dumbbell: InclinePressDumbel,
        },
        description:
          "An upper chest exercise performed on an incline bench, pressing the weight upwards.",
      },
      {
        name: "decline press",
        equipment: ["barbell", "dumbbell"],
        imageUrl: {
          barbell: DeclinePressBarbel,
          dumbbell: DeclinePressDumbel,
        },
        description:
          "A lower chest exercise performed on a decline bench, pressing the weight away from the chest.",
      },
    ],
    image: Chest,
  },
  legs: {
    exercises: [
      {
        name: "deadlift",
        equipment: ["barbell", "dumbbell"],
        imageUrl: {
          barbell: BarbelLift,
          dumbbell: DeclinePressDumbel,
        },
        description:
          "A full-body exercise focusing on the posterior chain, lifting the weight from the ground to hip level.",
      },
      {
        name: "lunges",
        equipment: ["dumbbell", "barbell"],
        imageUrl: {
          barbell: BarbelLunges,
          dumbbell: Dumbellunges,
        },
        description:
          "A lower body exercise that targets the quads, hamstrings, and glutes by stepping forward or backward into a lunge position.",
      },
      {
        name: "squat",
        equipment: ["barbell", "dumbbell"],
        imageUrl: {
          barbell: Barbelsquat,
          dumbbell: Dumbelsquat,
        },
        description:
          "A fundamental lower body exercise targeting the quads, hamstrings, and glutes by lowering the body into a seated position and then standing back up.",
      },
    ],
    image: Legs,
  },
  back: {
    exercises: [
      {
        name: "barbell row",
        equipment: ["barbell"],
        imageUrl: {
          barbell: BarbelRow,
        },
        description:
          "A compound exercise that targets the upper and lower back by rowing a barbell towards the torso while bent over.",
      },
      {
        name: "one arm row",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: BarbelOneArmRow,
        },
        description:
          "A unilateral back exercise performed by rowing a dumbbell towards the torso while bent over and supported by one arm.",
      },
      {
        name: "bent over row",
        equipment: ["barbell", "dumbbell"],
        imageUrl: {
          barbell: Barbelbentoverrow,
          dumbbell: Dumbelbentoverrow,
        },
        description:
          "A back exercise where you bend at the waist and row the weight towards your lower chest.",
      },
    ],
    image: Back,
  },
  arms: {
    exercises: [
      {
        name: "bicep curls",
        equipment: ["dumbbell", "barbell"],
        imageUrl: {
          barbell: Barbelbicepcurl,
          dumbbell: Dumbelbicepcurl,
        },
        description:
          "An isolation exercise that targets the biceps by curling the weight upwards towards the shoulders.",
      },
      {
        name: "triceps extension",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbellTricepExtension,
        },
        description:
          "An isolation exercise that targets the triceps by extending the arm overhead or behind the body.",
      },
      {
        name: "hammer curl",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbbelHammerCurl,
        },
        description:
          "A variation of the bicep curl that targets the biceps and forearms, performed with a neutral grip.",
      },
    ],
    image: Arm,
  },
  abs: {
    exercises: [
      {
        name: "russian twist",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DummbellRusianTwist,
        },
        description:
          "A core exercise that targets the obliques by twisting the torso side to side while holding a weight.",
      },
      {
        name: "standing side bend",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbbelStandingSideBench,
        },
        description:
          "An exercise that targets the obliques by bending the torso side to side while holding a weight.",
      },
      {
        name: "weighted sit up with dumbbell",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelWeightSitUp,
        },
        description:
          "A core exercise that targets the abs by performing a sit-up while holding a weight.",
      },
    ],
    image: Abs,
  },
  shoulders: {
    exercises: [
      {
        name: "shoulder press",
        equipment: ["dumbbell", "barbell"],
        imageUrl: {
          barbell: DumbelShoulderPress,
          dumbbell: BarbelShoulderPress,
        },
        description:
          "A compound exercise that targets the shoulder muscles by pressing the weight overhead.",
      },
      {
        name: "lateral raise",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelLateralRaise,
        },
        description:
          "An isolation exercise that targets the lateral deltoids by lifting the weights out to the sides.",
      },
      {
        name: "deltoid fly",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelDeltoidFly,
        },
        description:
          "An isolation exercise that targets the rear deltoids by lifting the weights out to the sides while bent over.",
      },
    ],
    image: Shoulders,
  },
};

export default exercises;
