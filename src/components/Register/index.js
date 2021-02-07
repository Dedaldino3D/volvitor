import { FaUser } from "react-icons/fa";

import {
  RegisterContainer,
  RegisterHeader,
  Card,
  CardBody,
  Button,
} from "./styles";
import Input from "../layout/Input";

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
              icon={<FaUser />}
            />
            <Input
              placeholder="Enter email"
              type="email"
              onChange={handleChange}
              // icon={}
            />
            <Input
              placeholder="Enter password"
              type="password1"
              onChange={handleChange}
              // icon={}
            />
            <Input
              placeholder="Confirm password"
              type="password2"
              onChange={handleChange}
              // icon={}
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
