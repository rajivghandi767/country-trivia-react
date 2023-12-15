import { GameDataItem } from "../types";

type Props = {
  data: GameDataItem;
  onSubmit: (correct: boolean) => void;
};

function QuestionPrompt(props: Props) {
  return (
    <div>
      <h3> What is the capital city of {props.data.capital}?</h3>
    </div>
  );
}

export default QuestionPrompt;
