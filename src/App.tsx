// import styles from "App.module.scss";
import all_game_data from "./data.json";
import { GameDataPair } from "./types";
import { useState } from "react";
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
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const data = toGameDataPair(all_game_data.data[currentQuestionIdx]);

  return (
    <div>
      <div>
        <h1>Welcome to Country Trivia!</h1>
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
  );
}

export default App;
