import { GameDataPair } from "../types";

type Props = {
  game_data: GameDataPair;
  onSubmit: (correct: boolean) => void;
};

function QuestionPrompt(props: Props) {
  return (
    <div>
      <h3> What is the capital city of {props.game_data.Country}</h3>
    </div>
  );
}

export default QuestionPrompt;
