import { GameDataPair } from "../types";

type Props = {
  game_data: GameDataPair;
  //onSubmit: (correct: boolean) => void;
};

function QuestionPrompt({ game_data }: Props) {
  return (
    <div>
      <h3> What is the capital city of {game_data.Country} ?</h3>
      <input type="text" />
    </div>
  );
}

export default QuestionPrompt;
