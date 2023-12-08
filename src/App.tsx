import styles from "./App.module.scss";
import data from "./country_capitals.json";
import { GameDataPairs } from "./types";
import { useState } from "react";
import StatBar from "./components/StatBar";

function App() {
  const allGameData = data as GameDataPairs;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setInCorrectAnswers] = useState(0);

  return (
    <div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allGameData.data.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
    </div>
  );
}

export default App;
