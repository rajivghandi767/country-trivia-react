import styles from "./App.module.scss";
import game_data from "./country_capitals.json";
import { GameDataPairs } from "./types";
import { useState } from "react";
import StatBar from "./components/StatBar";

function App() {
  const allGameData = game_data as GameDataPairs;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  return (
    <div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allGameData.game_data.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
    </div>
  );
}

export default App;
