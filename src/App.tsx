import React from "react";
import countryData from "../public/countryData.json";
import { useEffect, useState } from "react";
import StatBar from "./components/StatBar";

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
          <h2 className="text-xl font-bold">A web app by Rajiv Wallace</h1>
        </div>
      </div>
    </>
  );
}

export default App;
