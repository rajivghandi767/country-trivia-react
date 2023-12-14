// import styles from "App.module.scss";
import all_game_data from "./country_capitals.json";
import { GameDataPair } from "./types";
import { useState } from "react";
import StatBar from "./components/StatBar";
import QuestionPrompt from "./components/QuestionPrompt";

type GameDataArray = typeof all_game_data;
type GameDataInfo = GameDataArray["game_data"][number];

const toGameDataPair = (entry: GameDataInfo): GameDataPair => ({
  Country: entry.Country,
  Capital: Array.isArray(entry.Capital) ? entry.Capital : [entry.Capital],
  Continent: entry.Continent,
  Flag: entry.Flag,
});

function App() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const game_data = toGameDataPair(all_game_data[currentQuestionIdx]);

  return (
    <div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={all_game_data.game_data.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionPrompt game_data={game_data} />
      <button>Submit</button>
    </div>
  );
}

export default App;
