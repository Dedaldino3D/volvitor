import { useState } from "react";
import { FaRegUser, FaRegEnvelope, FaLock } from "react-icons/fa";

import Logo from "../layout/Logo";
import Input from "../layout/Input";
import {
  RegisterContainer,
  RegisterHeader,
  Card,
  CardBody,
  Button,
} from "./styles";

const Register = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

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

  return (
    <RegisterContainer>
      <Logo />
      <RegisterHeader>
        <h4>Sign up</h4>
        <p>Get a icaller account now.</p>
      </RegisterHeader>
      <Card>
        <CardBody>
          <form method="POST" onSubmit={handleSubmit}>
            <Input
              placeholder="Enter username"
              type="text"
              onChange={handleChange}
              icon={<FaRegUser />}
              required
            />
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
              name="password1"
              onChange={handleChange}
              icon={<FaLock />}
              required
            />
            <Input
              placeholder="Confirm password"
              type="password"
              name="password2"
              onChange={handleChange}
              icon={<FaLock />}
              required
            />
            <Button type="submit">Sign up</Button>
          </form>
        </CardBody>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p>
            By registering you agree with our <a href="#">Terms of use</a>
          </p>
        </div>
      </Card>
    </RegisterContainer>
  );
};

export default Register;
