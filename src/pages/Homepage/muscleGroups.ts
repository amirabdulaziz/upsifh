import Arm from "../../assets/arm.jpg";
import Chest from "../../assets/chest.jpg";
import Legs from "../../assets/leg.jpg";
import Shoulders from "../../assets/shoulder.png";
import Back from "../../assets/back.jpg";
import All from "../../assets/all.webp";

const muscleGroups = [
  {
    id: 1,
    name: "Chest",
    exercises: ["Bench Press", "Chest Fly", "Push Ups"],
    imageUrl: Chest,
  },
  {
    id: 2,
    name: "Back",
    exercises: ["Pull Ups", "Deadlift", "Bent Over Row"],
    imageUrl: Legs,
  },
  {
    id: 3,
    name: "Legs",
    exercises: ["Squats", "Lunges", "Leg Press"],
    imageUrl: Shoulders,
  },
  {
    id: 4,
    name: "Arms",
    exercises: ["Bicep Curl", "Tricep Dip", "Hammer Curl"],
    imageUrl: Arm,
  },
  {
    id: 5,
    name: "Shoulders",
    exercises: ["Shoulder Press", "Lateral Raise", "Front Raise"],
    imageUrl: Back,
  },
  {
    id: 6,
    name: "All",
    exercises: ["Crunches", "Planks", "Leg Raises"],
    imageUrl: All,
  },
];

export default muscleGroups;
