import { useState } from "react";
import Plus from "./common/Plus";
import EssayWriting from "./Screens/EssayWriting";
import StartPage from "./Screens/StartPage";
import { PlusScreenDuration } from "./common/Config";

const runTask = (setPage) => {
  setPage("Plus");
  setTimeout(() => {
    setPage("Essay")
  }, PlusScreenDuration)
};

function App() {
  const [page, setPage] = useState("Start");

  const renderComponent = () => {
    switch (page) {
      case "Start":
        return <StartPage startTask={() => runTask(setPage)}></StartPage>;
      case "Plus":
        return <Plus></Plus>;
      case "Essay":
        return <EssayWriting></EssayWriting>;
    }
  };

  return <>{renderComponent()}</>;
}

export default App;
