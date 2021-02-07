import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./styles";
import Navigation from "./Navigation";
import Chat from "./Chat";
import ChatList from "./ChatList";
import Profile from "./Profile";
// import Groups from "./Groups";
import Settings from "./Settings";
import Register from "./Register";

const AppContainer = styled.main`
  @media (min-width: 992px) {
    display: flex;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Navigation />
        <Profile />
        <Chat />
        {/* <Register /> */}
      </AppContainer>
    </Router>
  );
}

export default App;
