import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import DefaultRoutes from "../routes";
import Routes from "../routes/routes";
import GlobalStyles from "./styles";
import Navigation from "./Navigation";

const AppContainer = styled.main`
  @media (min-width: 992px) {
    display: flex;
  }

  @media (max-width: 991px) {
    flex-direction: column-reverse;
    & > :nth-child(3) {
      display: none;
    }
  }
`;

export function MainApp() {
  return (
    <AppContainer>
      <Navigation />
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
    </AppContainer>
  );
}

export function App() {
  return (
    <>
      <GlobalStyles />
      <DefaultRoutes />
    </>
  );
}
export default App;
