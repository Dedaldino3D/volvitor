import { Component } from "react";
import { Form, Input } from "../layout/Form";

import { LoginContainer } from "./styles";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleChange = (e) => {};
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <LoginContainer>
        <Form method="POST" onSubmit={this.handleSubmit}>
          <Input type="text" onChange={this.handleChange} required />
          <Input type="text" onChange={this.handleChange} required />
          <Input type="text" onChange={this.handleChange} required />
        </Form>
      </LoginContainer>
    );
  }
}

export default Login;
