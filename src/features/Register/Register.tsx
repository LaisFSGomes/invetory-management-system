import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import React from "react";
import { Button, LoginContainer, LoginWrapper } from "./Register.styles";

export const Register: React.FC = () => {
  const [inputEmailRegister, setInputEmailRegister] = React.useState("");
  const [inputNameRegister, setInputNameRegister] = React.useState("");
  const [inputPasswordRegister, setInputPasswordRegister] = React.useState("");
  const [inputConfirmPasswordRegister, setInputConfirmPasswordRegister] = React.useState("");

  const onInputEmailRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailRegister(e.target.value);
  };const onInputNameRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailRegister(e.target.value);
  };
  const onInputPasswordRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPasswordRegister(e.target.value);
  };
  const onInputConfirmPasswordRegisterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPasswordRegister(e.target.value);
  };
  return(
    <React.Fragment>
    <AppBarResponsive />
    <LoginWrapper>
      <LoginContainer>
        <Input 
          label="Email"
          onChange={onInputEmailRegisterChange}
          value={inputEmailRegister}
          id="email"
          type="email"
        />
        <Input 
          label="Name"
          onChange={onInputNameRegisterChange}
          value={inputNameRegister}
          id="name"
          type="text"
        />
        <Input 
          label="Password"
          onChange={onInputPasswordRegisterChange}
          value={inputPasswordRegister}
          id="password"
          type="password"
        />
        <Input 
          label="Confirm Password"
          onChange={onInputConfirmPasswordRegisterChange}
          value={inputConfirmPasswordRegister}
          id="password"
          type="password"
        />
         <Button>Register</Button>
      </LoginContainer>
    </LoginWrapper>
    <Footer />
   </React.Fragment>
  );
};