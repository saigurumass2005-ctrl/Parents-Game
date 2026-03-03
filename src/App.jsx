import { useState } from "react";
import StartScreen from "./components/StartScreen";
import FamilyQuiz from "./Components/FamilyQuiz";

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <>
      {!player ? (
        <StartScreen setPlayer={setPlayer} />
      ) : (
        <FamilyQuiz player={player} />
      )}
    </>
  );
}

export default App;