import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import Routes from "../routes/routes";
import GlobalStyles from "./styles";
import Navigation from "./Navigation";

const AppContainer = styled.main`
  @media (min-width: 992px) {
    display: flex;
  }

  @media (max-width: 991px) {
    & > :nth-child(3) {
      display: none;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Navigation />
        <section>
          <Switch>
          {Routes.map((route, i) => (
            <Route
              key={i}
              component={route.main}
              exact={route.exact}
              path={route.path}
            />
          ))}
        </Switch>
        </section>
        <aside>
          <Switch>
          {Routes.map((route, i) => (
            <Route
              key={i}
              component={route.second}
              exact={route.exact}
              path={route.path}
            />
          ))}
        </Switch>
        </aside>
      </AppContainer>
    </>
  );
}

export default App;
