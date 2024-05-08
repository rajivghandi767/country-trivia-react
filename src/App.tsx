import { useEffect, useState } from "react";
import all_game_data from "./data.json";
import { GameDataPair } from "./types";
import StatBar from "./components/StatBar";
import QuestionPrompt from "./components/QuestionPrompt";
import Answer from "./components/Answer";

type TheJson = typeof all_game_data;
type DataField = TheJson["data"];
type ArrayValues = DataField[number];

const toGameDataPair = (entry: ArrayValues): GameDataPair => ({
  ...entry,
  capital: Array.isArray(entry.capital) ? entry.capital : [entry.capital],
});

function App() {
  //Dark Mode Toggle

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  //Game Scoring Logic

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const data = toGameDataPair(all_game_data.data[currentQuestionIdx]);

  return (
    <>
      <div className="h-screen bg-white dark:bg-black dark:text-white">
        <button
          className="absolute w-10 h-10 right-2 top-2 bg-black dark:bg-slate-300 rounded-full text-white dark:text-black"
          onClick={toggleDarkMode}
        >
          {darkMode === true ? "☀️" : "🌙"}
        </button>

        <div>
          <h1 className="text-xl font-bold">Welcome to Country Trivia!</h1>
        </div>

        <div>
          <StatBar
            currentQuestion={currentQuestionIdx + 1}
            totalQuestions={all_game_data.data.length}
            correct={correctAnswers}
            incorrect={incorrectAnswers}
          />
        </div>

        <div>
          <QuestionPrompt data={data} />
        </div>

        <div>
          <Answer />
        </div>
      </div>
    </>
  );
}

export default App;
