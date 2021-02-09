import { bool } from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: bool.isRequired,
};

PrivateRoute.defaultProps = {
  isAuthenticated: true,
};

const mapState = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default PrivateRoute;
// export default connect(mapState)(PrivateRoute);
