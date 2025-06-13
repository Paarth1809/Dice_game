import styled from "styled-components";
import { useState } from "react";
import StartGame from "./components/Startgame";
import GamePlay from "./components/GamePlay";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;
