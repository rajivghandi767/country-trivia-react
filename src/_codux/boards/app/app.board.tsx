import { createBoard } from "@wixc3/react-board";
import App from "../../../App.tsx";

export default createBoard({
  name: "App",
  Board: () => <App />,
  isSnippet: true,
  environmentProps: {
    canvasBackgroundColor: "#000000",
    windowWidth: 1920,
    windowHeight: 1080,
  },
});
