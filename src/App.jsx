import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState(null); // home / gym
  const [day, setDay] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

const [workout, setWorkout] = useState(() => {
    try {
      const saved = localStorage.getItem("workout");
      if (!saved) return[
    {
      category: "Warm-up",
      exercises: [
        { 
          name: "Toe touches", 
          done: false,
          description: "Raak afwisselend je tenen aan terwijl je rechtstaat. Goed voor flexibiliteit en warming-up."
        },
        { 
          name: "High knees", 
          done: false,
          description: "Loop ter plaatse en breng je knieën zo hoog mogelijk. Houd tempo hoog."
        },
        { 
          name: "Jumping jacks", 
          done: false,
          description: "Spring met armen en benen open en dicht. Goed om je hartslag te verhogen."
        },
        { 
          name: "Arm circles", 
          done: false,
          description: "Draai je armen in cirkels, eerst klein dan groter. Voor schoudermobiliteit."
        },
        { 
          name: "Hand squeezes", 
          done: false,
          description: "Open en sluit je handen snel. Eventueel met stressbal voor gripkracht."
        }
      ]
    },
    {
      category: "Lower Body",
      exercises: [
        {
          name: "Romanian with knee",
          done: false,
          description: "Balanceer op één been, buig naar voren en raak je tenen aan. Kom recht en breng je knie omhoog. Goed voor balans en hamstrings."
        },
        {
          name: "Bridge leg lift on toes",
          done: false,
          description: "Lig op je rug, duw je heupen omhoog en strek één been. Activeert je bilspieren en core."
        },
        {
          name: "Calf raises single leg row",
          done: false,
          description: "Duw jezelf op je tenen met één been en laat langzaam zakken. Versterkt je kuiten en stabiliteit."
        }
      ]
    },
    {
      category: "Grip Strength",
      exercises: [
        {
          name: "Hand squeezes",
          done: false,
          description: "Open en sluit je handen snel. Gebruik eventueel een stressbal voor extra weerstand."
        },
        {
          name: "Door frame hang",
          done: false,
          description: "Hang aan een deurframe met je vingertoppen. Houd spanning in je schouders. Belangrijk voor gripkracht."
        },
        {
          name: "Open door fall",
          done: false,
          description: "Houd een deur vast en laat jezelf naar achter vallen in squat positie. Train je grip en controle."
        }
      ]
    },
    {
      category: "Upper Body",
      exercises: [
        {
          name: "Diamond push-ups",
          done: false,
          description: "Plaats je handen dicht bij elkaar (diamantvorm). Focus op triceps en borst."
        },
        {
          name: "Staggered push-ups",
          done: false,
          description: "Eén hand hoger dan de andere. Zorgt voor ongelijke belasting en extra spieractivatie."
        },
        {
          name: "Tricep push-ups",
          done: false,
          description: "Houd je armen dicht tegen je lichaam. Focus op triceps."
        },
        {
          name: "Anti push-ups",
          done: false,
          description: "Lig op de grond en duw je lichaam licht omhoog door je rug en armen te activeren."
        },
        {
          name: "Regular push-up",
          done: false,
          description: "Klassieke push-up. Hou je lichaam in een rechte lijn en span je core aan."
        }
      ]
    },
    {
      category: "Core",
      exercises: [
        {
          name: "Windshield wiper",
          done: false,
          description: "Lig op je rug met benen omhoog en draai ze van links naar rechts. Sterke core oefening."
        },
        {
          name: "Seesaw",
          done: false,
          description: "Combineer crunch en reverse crunch in een vloeiende beweging."
        },
        {
          name: "Side plank",
          done: false,
          description: "Steun op één elleboog en houd je lichaam recht. Train je schuine buikspieren."
        },
        {
          name: "Walk down shoulder taps",
          done: false,
          description: "Ga van push-up naar plank en tik afwisselend je schouders aan. Core en stabiliteit."
        }
      ]
    },
    {
      category: "Static stretching",
      exercises: [
        {
          name: "Rainbow kick",
          done: false,
          description: "Maak een cirkelbeweging met je been vanuit een squat positie. Goed voor mobiliteit."
        },
        {
          name: "Side lunge",
          done: false,
          description: "Stap opzij en buig één been terwijl het andere gestrekt blijft. Stretch binnenkant benen."
        },
        {
          name: "Lunge hip flexor stretch",
          done: false,
          description: "Stap in een lunge en duw je heup naar voren. Stretch je heupflexoren."
        },
        {
          name: "Runners lunge calf stretch",
          done: false,
          description: "Vanuit plank positie duw je je hiel naar achter. Stretch je kuiten."
        },
        {
          name: "Downward dog",
          done: false,
          description: "Duw je heupen omhoog in een omgekeerde V. Stretch rug, schouders en kuiten."
        },
        {
          name: "Cobra",
          done: false,
          description: "Duw je bovenlichaam omhoog terwijl je heupen op de grond blijven. Stretch buik en heupen."
        },
        {
          name: "Child's pose",
          done: false,
          description: "Zit naar achter op je hielen met armen naar voren. Ontspant rug en schouders."
        },
        {
          name: "Pigeon pose",
          done: false,
          description: "Eén been gebogen voor je, andere gestrekt achter. Diepe stretch voor heupen."
        },
        {
          name: "Butterfly stretch",
          done: false,
          description: "Zit met voetzolen tegen elkaar en duw je knieën naar beneden."
        },
        {
          name: "Bow and arrow",
          done: false,
          description: "Strek één been en buig het andere. Reik naar je voet voor hamstring stretch."
        },
        {
          name: "Number four stretch",
          done: false,
          description: "Leg je enkel op je knie en trek naar je toe. Stretch je bilspieren."
        }
      ]
    }
  ];
  return JSON.parse(saved);
  } catch {
    return[];
  }
  });
  useEffect(() => {
    localStorage.setItem("workout", JSON.stringify(workout));
  }, [workout]);

const [gymWorkout, setGymWorkout] = useState([
  {
    category: "Dag 1 – Spray wall + pull-ups",
    exercises: [
      {
        name: "Opwarming",
        description: "Traverses, mobiliteit, 3 makkelijke boulders + 2 rond 80%.",
        done: false
      },
      {
        name: "Spray wall (limit)",
        description: "4–6 boulders, 3–5 moves, kleine grepen. 3–5 pogingen met 3 min rust.",
        done: false
      },
      {
        name: "Pull-ups",
        description: "4×5–8 reps, 2 min rust. Voeg gewicht toe of gebruik band indien nodig.",
        done: false
      },
      {
        name: "Core",
        description: "Hanging knee raises 3×10 + plank 3×45 sec.",
        done: false
      }
    ]
  },
  {
    category: "Dag 2 – Hangboard + boulderen",
    exercises: [
      {
        name: "Opwarming",
        description: "10–15 min klimmen + lichte hangs.",
        done: false
      },
      {
        name: "Hangboard",
        description: "7s hang / 3s rust, 6 reps = 1 set, 3–4 sets.",
        done: false
      },
      {
        name: "Techniek + volume",
        description: "8–10 boulders (6a–6b), focus op techniek.",
        done: false
      },
      {
        name: "Project",
        description: "20–30 min op niveau 6c.",
        done: false
      },
      {
        name: "Lichte pull-ups",
        description: "2–3×5 reps, optioneel.",
        done: false
      }
    ]
  }
]);
const currentWorkout =
    mode === "gym" ? [gymWorkout[day]] : workout;

const totalExercises = currentWorkout.reduce(
  (total, cat) => total + cat.exercises.length,
  0
);

const completedExercises = currentWorkout.reduce(
  (total, cat) =>
    total + cat.exercises.filter((ex) => ex.done).length,
  0
);

const progress =
  totalExercises === 0
    ? 0
    : Math.round((completedExercises / totalExercises) * 100);

  // 🔄 toggle done (immutably)
const toggleExercise = (catIndex, exIndex) => {
  const source = mode === "gym" ? gymWorkout : workout;
  const setter = mode === "gym" ? setGymWorkout : setWorkout;

  const newData = source.map((cat, cIndex) => {
    if (cIndex !== catIndex) return cat;

    return {
      ...cat,
      exercises: cat.exercises.map((ex, eIndex) => {
        if (eIndex !== exIndex) return ex;

        return {
          ...ex,
          done: !ex.done
        };
      })
    };
  });

  setter(newData);
};
useEffect(() => {
  localStorage.setItem("gymWorkout", JSON.stringify(gymWorkout));
}, [gymWorkout]);

  // 🟢 KEUZESCHERM
  if (!mode) {
    return (
      <div className="app-container">
        <h1>Kies je training</h1>

        <button onClick={() => setMode("home")}>
          🏠 Thuis trainen
        </button>

        <button onClick={() => setMode("gym")} style={{ marginLeft: "10px" }}>
          🧗 In de zaal
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <button onClick={() => setMode(null)}>← terug</button>

      <h1>Boulder Trainer</h1>
      <div className="progress-container">
  <div className="progress-text">
    {completedExercises} / {totalExercises}
  </div>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>

      {/* 🔥 DAG SELECTOR */}
      {mode === "gym" && (
        <div className="tabs">
          <button
            className={day === 0 ? "active" : ""}
            onClick={() => setDay(0)}
          >
            Dag 1
          </button>

          <button
            className={day === 1 ? "active" : ""}
            onClick={() => setDay(1)}
          >
            Dag 2 
          </button>
        </div>
      )}

      {currentWorkout.map((cat, catIndex) => (
        <div key={catIndex}>
          <h2>{cat.category}</h2>

          {cat.exercises.map((ex, exIndex) => {
            const isOpen = openIndex === `${catIndex}-${exIndex}`;

            return (
              <div
                key={exIndex}
                className={`exercise-card ${ex.done ? "done" : ""}`}
                onClick={() =>
                  setOpenIndex(isOpen ? null : `${catIndex}-${exIndex}`)
                }
              >
                <div className="exercise-header">
                  <strong>{ex.name}</strong>

                  <button
  className={ex.done ? "done" : ""}
  onClick={(e) => {
    e.stopPropagation();
    toggleExercise(catIndex, exIndex);
  }}
>
  {ex.done ? "✔" : "Done"}
</button>
                </div>

                {isOpen && (
                  <p className="exercise-description">
                    {ex.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;