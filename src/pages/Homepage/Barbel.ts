import BarbelSquat from "../../assets/barbell squat.jpg";
import BarbelLift from "../../assets/barbelllift.jpg";
import BarbelBenchPress from "../../assets/barbellbenchpress.webp";
import BarbelRow from "../../assets/barbellbentoverrow.jpg";
import BarbelShoulderPress from "../../assets/barbellshoulderpress.jpg";

const barbell = [
  {
    id: 1,
    name: "Barbell Bench Press",
    imageUrl: BarbelBenchPress,
    description:
      "The barbell bench press is a classic exercise for developing upper body strength, primarily targeting the chest, shoulders, and triceps.",
  },
  {
    id: 2,
    name: "Barbell Squat",
    imageUrl: BarbelSquat,
    description:
      "Barbell squats are compound exercises that target multiple muscle groups, including the quadriceps, hamstrings, glutes, and core.",
  },
  {
    id: 3,
    name: "Barbell Deadlift",
    imageUrl: BarbelLift,
    description:
      "The barbell deadlift is a powerful exercise that works the entire body, focusing on the posterior chain, including the lower back, glutes, hamstrings, and core.",
  },
  {
    id: 4,
    name: "Barbell Bent Over Row",
    imageUrl: BarbelRow,
    description:
      "Barbell bent over rows target the upper back muscles, including the latissimus dorsi, rhomboids, and traps, while also engaging the biceps and core.",
  },
  {
    id: 5,
    name: "Barbell Shoulder Press",
    imageUrl: BarbelShoulderPress,
    description:
      "The barbell shoulder press is a fundamental exercise for developing shoulder strength and size, emphasizing the deltoid muscles.",
  },
];

export default barbell;
