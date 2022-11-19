import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import React from "react";
import { LoginWrapper, LoginContainer, Button, LinkRegister } from "./Login.styles";
import { InputLabel, Typography } from '@mui/material';
import { PagesRoutes } from "features/constants";


export const Login: React.FC = () => {
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const onInputEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const onInputPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  return (
   <React.Fragment>
    <AppBarResponsive />
    <LoginWrapper>
      <LoginContainer>
        <Input 
          label="Email"
          onChange={onInputEmailChange}
          value={inputEmail}
          id="email"
          type="email"
        />
        <Input 
          label="Password"
          onChange={onInputPasswordChange}
          value={inputPassword}
          id="password"
          type="password"
        />
         <Button>Login</Button>
      </LoginContainer>
      <Typography>
        Are you new here? <LinkRegister to = {PagesRoutes.register}>Create an account</LinkRegister>
      </Typography>
    </LoginWrapper>
    <Footer />
   </React.Fragment>
  );
};
