import { GameDataPair } from "../types";

type Props = {
  data: GameDataPair;
  //onSubmit: (correct: boolean) => void;
};

const question = (country: string) => {
  return `What is the capital city of ${country}?`;
};

function QuestionPrompt({ data }: Props) {
  return (
    <div>
      <h3>{question(data.country)}</h3>
      <input type="text" />
    </div>
  );
}

export default QuestionPrompt;
