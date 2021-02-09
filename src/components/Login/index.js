import { useState } from "react";
import { bool } from "prop-types";
import { Link, Redirect, useLocation } from "react-router-dom";
import { FaRegEnvelope, FaLock } from "react-icons/fa";

import Logo from "../layout/Logo";
import Input from "../layout/Input";
import {
  RegisterContainer,
  RegisterHeader,
  Card,
  CardBody,
  Button,
  ForgotPass,
} from "../Register/styles";

const Login = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  const handleChange = (e) => {
    setState((cs) => ({
      ...cs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send values to API
    console.log("values:", state);
  };

  const { from } = location.state || {
    from: { pathname: "/home" },
  };

  if (props.isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <RegisterContainer>
      <Logo />
      <RegisterHeader>
        <h4>Login</h4>
        <p>See what was changed.</p>
      </RegisterHeader>
      <Card>
        <CardBody>
          <form method="POST" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter email"
              type="email"
              onChange={handleChange}
              icon={<FaRegEnvelope />}
              required
            />
            <Input
              placeholder="Enter password"
              type="password"
              name="password"
              onChange={handleChange}
              icon={<FaLock />}
              required
            />
            <Link to="#">
              <ForgotPass>Forgot your password?</ForgotPass>
            </Link>
            <Button type="submit">Login</Button>
          </form>
        </CardBody>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p>
            Already have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </Card>
    </RegisterContainer>
  );
};

Login.propTypes = {
  isAuthenticated: bool.isRequired,
};

Login.propTypes = {
  isAuthenticated: false,
};

export default Login;
