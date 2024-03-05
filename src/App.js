import { useState } from "react";
import Plus from "./common/Plus";
import EssayWriting from "./Screens/EssayWriting";
import StartPage from "./Screens/StartPage";
import { PlusScreenDuration } from "./common/Config";
import MainMenu from "./Screens/MainMenu";
import MusicVideo from "./Screens/MusicVideo";
import MathTask from "./Screens/MathTask";

function App() {
  const [page, setPage] = useState("Main");
  const [task, setTask] = useState("");

  const runTask = () => {
    setPage("Plus");
    setTimeout(() => {
      setPage(task);
    }, PlusScreenDuration);
  };
  const endTask = () => {
    setPage("Main");
    setTask("");
  }

  const startEssay = () => {
    setTask("Essay");
    setPage("Start");
  };
  const startVideo = () => {
    setTask("Video");
    setPage("Start");
  };
  const startMath = () => {
    setTask("Math");
    setPage("Start");
  };

  const renderComponent = () => {
    switch (page) {
      case "Start":
        return <StartPage startTask={() => runTask()}></StartPage>;
      case "Plus":
        return <Plus></Plus>;
      case "Essay":
        return <EssayWriting endTask={() => endTask()}></EssayWriting>;
      case "Math":
        return <MathTask endTask={() => endTask()}></MathTask>;
      case "Video":
        return <MusicVideo endTask={() => endTask()}></MusicVideo>;
      case "Main":
        return (
          <MainMenu
            startEssay={() => startEssay()}
            startVideo={() => startVideo()}
            startMath={() => startMath()}
          ></MainMenu>
        );
    }
  };

  return <>{renderComponent()}</>;
}

export default App;
