import { AppBarResponsive, Footer } from "components";
import { Input } from "components/Input";
import React from "react";
import { LoginWrapper, LoginContainer, Button, LinkRegister } from "./Login.styles";
import { Typography } from '@mui/material';
import { PagesRoutes } from "features/constants";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const { Login, user } = React.useContext(UserContext);
  const onInputEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const onInputPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  const onLoginButtonClick = () => {
    if(Login(inputEmail, inputPassword)){
      alert("Welcome "+ user.name);
      navigate(PagesRoutes.products);
    }
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
         <Button onClick={onLoginButtonClick}>Login</Button>
      </LoginContainer>
      <Typography>
        Are you new here? <LinkRegister to = {PagesRoutes.register}>Create an account</LinkRegister>
      </Typography>
    </LoginWrapper>
    <Footer />
   </React.Fragment>
  );
};
