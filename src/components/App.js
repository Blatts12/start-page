import styled from "styled-components";
import Clock from "./elements/Clock";
import Greet from "./elements/Greet";
import Main from "./Main";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2.75vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  grid-gap: 2em;
  grid-template-areas: "clock main greet" "weather main weather_info";
`;

function App() {
  return (
    <AppContainer>
      <Clock />
      <Greet />
      <Main />
    </AppContainer>
  );
}

export default App;
