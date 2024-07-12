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
import InclinePressDumbel from "../../assets/dumbelinclinepress.jpg";
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
import lunges from "../../assets/lunge-muscles.jpg";
import russian from "../../assets/russian.jfif";
import DumbelDeadlift from "../../assets/dumbeldeadlift.webp"
import Benchpress from "../../assets/benchPress.webp"
import InclinePress from "../../assets/inclinePress.webp"
import deadlift from "../../assets/Deadlift.webp"
import Squat from "../../assets/squat.webp"
import barbellrow from "../../assets/barbellrow.webp"
import onearm from "../../assets/onearmrow.webp"
import bentover from "../../assets/bentover.webp"
import biceps from "../../assets/biceps.webp"
import tricep from "../../assets/tricep.webp"
import hammer from "../../assets/hammer.webp"
import standing from "../../assets/standing.webp"
import sit from "../../assets/sit.webp"
import shoulderpress from "../../assets/shoulderpress.webp"
import lateral from "../../assets/lateral.webp"
import fly from "../../assets/fly.jfif"

import './style.css';

export interface Exercise {
  name: string;
  equipment: string[];
  imageUrl?: string | { [key: string]: string };
  detailedDescription: DetailedDescriptionSection[];
  description: string;
  videoUrl: string;
  anatomyImage: string;
  
}

export interface DetailedDescriptionSection { // Add this new interface
  title: string;
  sections: {
    subtitle: string;
    items: string[];
  }[];
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
        equipment: ["dumbbell", "barbell"],
        imageUrl: {
          barbell: BarbelBenchPress,
          dumbbell: BarbelBenchPress,
        },
        description:
          "A compound exercise that targets the chest, shoulders, and triceps by pressing a barbell away from the chest while lying on a bench.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Lie flat on a bench with feet flat on the ground.",
                    "Grip the barbell slightly wider than shoulder-width apart.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Unrack the barbell, holding it above your chest with arms extended.",
                    "Lower the bar to your chest, keeping elbows at a 45-degree angle.",
                    "Press the bar back up to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale while lowering the bar.",
                    "Exhale while pressing it up.",
                  ],
                },
                {
                  subtitle: "Safety:",
                  items: [
                    "Use a spotter for heavy weights.",
                    "Keep movements controlled and avoid bouncing the bar off your chest.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep feet flat and maintain a slight arch in your lower back.",
                    "Focus on form before increasing weight.",
                    "Avoid flaring elbows to protect shoulders.",
                  ],
                },
              ],
            },
        ],
        videoUrl: "https://drive.google.com/file/d/1PJPg279lPmuaVuJQ_ZEzfMJGFY2XrBqr/preview", // Replace with actual video ID
        anatomyImage: Benchpress,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Set the bench at a 30-45 degree angle.",
                    "Lie on the bench with feet flat on the floor.",
                    "Grip the barbell or dumbbells with a shoulder-width grip.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Unrack the barbell or lift the dumbbells, holding them above your chest with arms extended.",
                    "Lower the weight to your upper chest, keeping elbows at a 45-degree angle.",
                    "Press the weight back up to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale while lowering the weight.",
                    "Exhale while pressing it back up.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your feet flat and back slightly arched.",
                    "Control the movement; avoid using momentum.",
                    "Ensure a secure grip to prevent slipping.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1QJgRzYcSr7706gWQTAT8HFrcXPxzOp-M/preview", // Replace with actual video ID
        anatomyImage: InclinePress,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Set the bench at a decline angle (typically 15-30 degrees).",
                    "Lie on the bench with your feet secured under the pads to maintain stability.",
                    "Grip the barbell slightly wider than shoulder-width apart, or hold dumbbells at your sides.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Unrack the barbell or lift the dumbbells, holding them above your lower chest with arms extended.",
                    "Lower the weight to your chest, keeping elbows at a 45-degree angle.",
                    "Press the weight back up to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale while lowering the weight.",
                    "Exhale while pressing it back up.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your feet secured and back flat on the bench.",
                    "Control the movement to avoid using momentum.",
                    "Ensure a secure grip to prevent slipping.",
                  ],
                },
              ],
            },
          ], 
        videoUrl: "https://drive.google.com/file/d/1-_oILsmHEhj9_OuBvFPP98vOX86b-x7f/preview", // Replace with actual video ID
        anatomyImage: InclinePress,
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
          dumbbell: DumbelDeadlift,
        },
        description:
          "A full-body exercise focusing on the posterior chain, lifting the weight from the ground to hip level.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet hip-width apart, toes under the barbell.",
                    "Bend at the hips and knees to grip the barbell with hands just outside your knees.",
                    "Keep your back flat, chest up, and shoulders back.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Engage your core and lift the barbell by straightening your hips and knees simultaneously.",
                    "Keep the bar close to your body as you lift.",
                    "Stand up straight with shoulders back and hips fully extended.",
                    "Lower the bar back to the ground by bending at the hips and knees, maintaining a flat back.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale before lifting the bar.",
                    "Exhale as you reach the top of the lift.",
                    "Inhale again as you lower the bar.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, ensuring proper form with each lift.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your back straight to avoid injury.",
                    "Engage your core throughout the movement.",
                    "Use a mixed grip (one hand overhand, one underhand) for better grip strength if needed.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://www.youtube.com/embed/XxWcirHIwVo?si=vwVOsK4UIG0cVz5b", // Replace with actual video ID
        anatomyImage: deadlift,
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
        detailedDescription: [
          {
            title: "Steps:",
            sections: [
              {
                subtitle: "Setup:",
                items: [
                  "Stand upright with feet hip-width apart.",
                  "Hold dumbbells at your sides or place a barbell across your shoulders (optional).",
                ],
              },
              {
                subtitle: "Execution:",
                items: [
                  "Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees.",
                  "Ensure your front knee is directly above your ankle and your back knee hovers just above the ground.",
                  "Push through the heel of your front foot to return to the starting position.",
                ],
              },
              {
                subtitle: "Breathing:",
                items: [
                  "Inhale as you step forward.",
                  "Exhale as you push back to the starting position.",
                ],
              },
              {
                subtitle: "Repetition:",
                items: [
                  "Repeat with the opposite leg.",
                  "Perform the desired number of repetitions for each leg.",
                ],
              },
              {
                subtitle: "Tips:",
                items: [
                  "Keep your torso upright and core engaged.",
                  "Avoid letting your front knee go past your toes.",
                  "Maintain a controlled movement to prevent injury.",
                ],
              },
            ],
          },
        ],
        videoUrl:
          "https://drive.google.com/file/d/1_CECimr65SiFKljzPGisP4CvxyN9Mc2Q/preview", // Replace with actual video ID
        anatomyImage: lunges,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart.",
                    "If using a barbell, position it across your upper back, gripping it with hands slightly wider than shoulder-width.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Lower your body by bending your hips and knees, as if sitting back into a chair.",
                    "Keep your chest up, back straight, and knees aligned with your toes.",
                    "Lower until your thighs are at least parallel to the ground.",
                    "Push through your heels to return to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower into the squat.",
                    "Exhale as you push back up to the starting position.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your weight on your heels and avoid letting your knees go past your toes.",
                    "Engage your core for stability.",
                    "Maintain a neutral spine to prevent back injury.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1q1kSnzbANToJC12yDvuXkJTJmAcPeHd-/preview", // Replace with actual video ID
        anatomyImage: Squat,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart.",
                    "Bend at the hips and knees, keeping your back straight, to grip the barbell with hands slightly wider than shoulder-width apart.",
                    "Engage your core and keep your back flat, with your torso slightly above parallel to the ground.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Pull the barbell towards your lower chest, keeping your elbows close to your body.",
                    "Squeeze your shoulder blades together at the top of the movement.",
                    "Lower the barbell back to the starting position in a controlled manner.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the barbell.",
                    "Exhale as you pull the barbell towards your lower chest.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your back flat and avoid rounding your shoulders.",
                    "Use a controlled motion to engage the muscles effectively.",
                    "Avoid using momentum to lift the barbell.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1DJj7sS0lwfouxp-5pTMOo4Dva5htTDbo/preview", // Replace with actual video ID
        anatomyImage: barbellrow ,
      },
      {
        name: "one arm row",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: BarbelOneArmRow,
        },
        description:
          "A unilateral back exercise performed by rowing a dumbbell towards the torso while bent over and supported by one arm.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand beside a bench with your feet shoulder-width apart.",
                    "Place one knee and the same-side hand on the bench for support, keeping your back flat and parallel to the ground.",
                    "Grip a dumbbell with the opposite hand, allowing it to hang straight down from your shoulder.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Pull the dumbbell towards your hip, keeping your elbow close to your body.",
                    "Squeeze your shoulder blade at the top of the movement.",
                    "Lower the dumbbell back to the starting position in a controlled manner.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the dumbbell.",
                    "Exhale as you pull the dumbbell towards your hip.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                    "Switch sides and repeat the exercise with the opposite arm.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your back flat and avoid twisting your torso.",
                    "Use a controlled motion to engage the muscles effectively.",
                    "Focus on squeezing your shoulder blade at the top of the movement.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1toSL78GH6TX34de3AWTQdVQfNkNmkWOL/preview", // Replace with actual video ID
        anatomyImage: onearm,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart.",
                    "Bend at the hips and knees, keeping your back straight, to grip the barbell with hands slightly wider than shoulder-width apart.",
                    "Engage your core and keep your back flat, with your torso slightly above parallel to the ground.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Pull the barbell towards your lower chest, keeping your elbows close to your body.",
                    "Squeeze your shoulder blades together at the top of the movement.",
                    "Lower the barbell back to the starting position in a controlled manner.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the barbell.",
                    "Exhale as you pull the barbell towards your lower chest.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your back flat and avoid rounding your shoulders.",
                    "Use a controlled motion to engage the muscles effectively.",
                    "Avoid using momentum to lift the barbell.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://www.youtube.com/embed/6gvmcqr226U?si=ZVn33VxK8s-DU4Hv", // Replace with actual video ID
        anatomyImage: bentover,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart, holding a dumbbell in each hand with arms fully extended and palms facing forward.",
                    "Keep your elbows close to your torso.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Curl the weights while contracting your biceps, lifting until the dumbbells are at shoulder level.",
                    "Keep your upper arms stationary and only move your forearms.",
                    "Hold the contracted position for a brief pause, then slowly lower the weights back to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the weights back to the starting position.",
                    "Exhale as you curl the weights up.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Avoid swinging the weights or using momentum.",
                    "Keep your back straight and core engaged.",
                    "Focus on squeezing the biceps at the top of the movement.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1G1kYIiokBAi7ffTx3-gkL4y18F1L4MoJ/preview", // Replace with actual video ID
        anatomyImage: biceps,
      },
      {
        name: "triceps extension",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbellTricepExtension,
        },
        description:
          "An isolation exercise that targets the triceps by extending the arm overhead or behind the body.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart or sit on a bench with your back straight.",
                    "Hold a dumbbell with both hands and lift it overhead, fully extending your arms. Your palms should be facing upward, holding the top end of the dumbbell.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Lower the dumbbell behind your head by bending your elbows, keeping your upper arms stationary and close to your ears.",
                    "Lower until your forearms are parallel to the ground or you feel a stretch in your triceps.",
                    "Extend your arms back to the starting position by contracting your triceps.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the dumbbell behind your head.",
                    "Exhale as you extend your arms back to the starting position.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your upper arms stationary and close to your head.",
                    "Avoid arching your back; keep your core engaged.",
                    "Use a controlled motion to avoid straining your elbows.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1r1jYlqDqrgMepVpjoQEo6IHg8gTrPkxZ/preview", // Replace with actual video ID
        anatomyImage: tricep,
      },
      {
        name: "hammer curl",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbbelHammerCurl,
        },
        description:
          "A variation of the bicep curl that targets the biceps and forearms, performed with a neutral grip.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart, holding a dumbbell in each hand with arms fully extended and palms facing your torso (neutral grip).",
                    "Keep your elbows close to your torso.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Curl the weights while keeping your palms facing each other, lifting until the dumbbells are at shoulder level.",
                    "Keep your upper arms stationary and only move your forearms.",
                    "Hold the contracted position for a brief pause, then slowly lower the weights back to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the weights back to the starting position.",
                    "Exhale as you curl the weights up.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Avoid swinging the weights or using momentum.",
                    "Keep your back straight and core engaged.",
                    "Focus on squeezing the biceps and brachialis at the top of the movement.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://www.youtube.com/embed/CFBZ4jN1CMI?si=F5ERNPzJ25SGKTCG", // Replace with actual video ID
        anatomyImage: hammer,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Sit on the floor with your knees bent and feet flat on the ground.",
                    "Lean back slightly to create a V-shape with your torso and thighs.",
                    "Hold a weight or medicine ball with both hands in front of your chest.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Twist your torso to the right, bringing the weight or medicine ball beside your right hip.",
                    "Twist back through the center and to the left, bringing the weight or medicine ball beside your left hip.",
                    "Continue alternating sides in a controlled manner.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Exhale as you twist to each side.",
                    "Inhale as you return to the center.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, ensuring proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your back straight and core engaged.",
                    "Avoid rounding your shoulders or slouching.",
                    "Move slowly and control the twist to maximize muscle engagement.",
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1UGYcz397V-ANspUhDFLyYRnZdbMM79yp/preview", // Replace with actual video ID
        anatomyImage: russian,
      },
      {
        name: "standing side bend",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbbelStandingSideBench,
        },
        description:
          "An exercise that targets the obliques by bending the torso side to side while holding a weight.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart.",
                    "Hold a dumbbell in one hand with your palm facing your body, and place your other hand on your hip.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Keeping your back straight, bend sideways at the waist to lower the dumbbell down the side of your leg.",
                    "Bend until you feel a stretch in your opposite side, without leaning forward or backward.",
                    "Slowly return to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you bend sideways.",
                    "Exhale as you return to the starting position.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                    "Switch sides and repeat the exercise with the dumbbell in the opposite hand.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your core engaged to support your spine.",
                    "Avoid using momentum; perform the movement slowly and with control.",
                    "Do not twist your torso; keep the movement in the side plane.",
                  ],
                },
              ],
            },
          ],          
        videoUrl: "https://www.youtube.com/embed/ARAWlmlgPbg?si=yEcwmvEO06ZAvPRk", // Replace with actual video ID
        anatomyImage: standing ,
      },
      {
        name: "weighted sit up with dumbbell",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelWeightSitUp,
        },
        description:
          "A core exercise that targets the abs by performing a sit-up while holding a weight.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Lie on your back with your knees bent and feet flat on the floor.",
                    "Hold a dumbbell with both hands against your chest or extend your arms holding the dumbbell above your chest.",
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Engage your core and lift your upper body towards your knees, performing a sit-up.",
                    "Keep the dumbbell close to your chest or extended above your chest as you sit up.",
                    "Slowly lower your upper body back to the starting position.",
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Exhale as you lift your upper body.",
                    "Inhale as you lower your upper body back down.",
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout.",
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Keep your feet flat on the floor to maintain stability.",
                    "Engage your core muscles throughout the movement to avoid straining your lower back.",
                    "Perform the movement slowly and with control to maximize muscle engagement.",
                  ],
                },
              ],
            },
          ],          
        videoUrl: "https://drive.google.com/file/d/1xdeUGg6z4v_l7PlVK_-opoNqrXkuuisU/preview", // Replace with actual video ID
        anatomyImage: sit,
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
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart, or sit on a bench with your back straight.",
                    "Hold a dumbbell in each hand at shoulder height, palms facing forward.",
                    "Engage your core and keep your back straight."
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Press the dumbbells upward until your arms are fully extended above your head.",
                    "Pause briefly at the top of the movement.",
                    "Lower the dumbbells back to shoulder height in a controlled manner."
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the dumbbells back to shoulder height.",
                    "Exhale as you press the dumbbells upward."
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout."
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Avoid arching your back; keep your core engaged.",
                    "Keep your elbows slightly in front of your body to protect your shoulder joints.",
                    "Use a controlled motion to avoid using momentum."
                  ],
                },
              ],
            },
          ],   
        videoUrl: "https://drive.google.com/file/d/1toVtD0AjVKXMIof80WphG8giGfVBLBQ1/preview", // Replace with actual video ID
        anatomyImage: shoulderpress,
      },
      {
        name: "lateral raise",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelLateralRaise,
        },
        description:
          "An isolation exercise that targets the lateral deltoids by lifting the weights out to the sides.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart, holding a dumbbell in each hand with arms at your sides.",
                    "Keep your back straight and engage your core."
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "Raise your arms out to the sides until they are parallel to the ground, keeping a slight bend in your elbows.",
                    "Pause briefly at the top of the movement.",
                    "Slowly lower the dumbbells back to the starting position."
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the dumbbells back to the starting position.",
                    "Exhale as you raise the dumbbells to the sides."
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout."
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Avoid using momentum; raise and lower the weights in a controlled manner.",
                    "Keep your shoulders down and away from your ears.",
                    "Focus on using your shoulder muscles to lift the weights, not your back or traps."
                  ],
                },
              ],
            },
          ],
        videoUrl: "https://drive.google.com/file/d/1B3WEc8Nrl4hfL2T9vyYCFy10c_6zZTI3/preview", // Replace with actual video ID
        anatomyImage: lateral,
      },
      {
        name: "deltoid fly",
        equipment: ["dumbbell"],
        imageUrl: {
          dumbbell: DumbelDeltoidFly,
        },
        description:
          "An isolation exercise that targets the rear deltoids by lifting the weights out to the sides while bent over.",
          detailedDescription: [
            {
              title: "Steps:",
              sections: [
                {
                  subtitle: "Setup:",
                  items: [
                    "Stand with feet shoulder-width apart, holding a dumbbell in each hand with arms hanging in front of you, palms facing each other.",
                    "Slightly bend your knees and hinge forward at the hips, keeping your back flat and core engaged."
                  ],
                },
                {
                  subtitle: "Execution:",
                  items: [
                    "With a slight bend in your elbows, lift the dumbbells out to the sides until your arms are parallel to the ground.",
                    "Squeeze your shoulder blades together at the top of the movement.",
                    "Slowly lower the dumbbells back to the starting position."
                  ],
                },
                {
                  subtitle: "Breathing:",
                  items: [
                    "Inhale as you lower the dumbbells back to the starting position.",
                    "Exhale as you lift the dumbbells to the sides."
                  ],
                },
                {
                  subtitle: "Repetition:",
                  items: [
                    "Perform the desired number of repetitions, maintaining proper form throughout."
                  ],
                },
                {
                  subtitle: "Tips:",
                  items: [
                    "Avoid using momentum; lift and lower the weights in a controlled manner.",
                    "Keep your back flat and avoid rounding your shoulders.",
                    "Focus on using your deltoid muscles to lift the weights, not your traps or back."
                  ],
                },
              ],
            },
          ],          
        videoUrl: "https://drive.google.com/file/d/1-JpZ36dA5Tda8k7-Tyu7dhlMQX893xyK/preview", // Replace with actual video ID
        anatomyImage: fly,
      },
    ],
    image: Shoulders,
  },
};

export default exercises;
