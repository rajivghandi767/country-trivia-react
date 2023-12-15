import styles from "./App.module.scss";
import data from "./data.json";
import { GameDataItems } from "./types";
import { useState } from "react";
import StatBar from "./components/StatBar";
import QuestionPrompt from "./components/QuestionPrompt";

function App() {
  const allGameData = data as GameDataItems;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  return (
    <div>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allGameData.data.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionPrompt />
    </div>
  );
}

export default App;
