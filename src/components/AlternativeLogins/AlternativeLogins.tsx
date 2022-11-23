import { Typography } from "@mui/material";
import React from "react";
import { ButtonIcon, LinkLoginWrapper, LinksAnotherLogin } from "./AlternativeLogins.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

interface AlternativeLoginsProps {
    message: "login" | "register";
}

export const AlternativeLogins: React.FC<AlternativeLoginsProps> = ({message}) => {
    const onButtonClick = () => {
        alert(`${message} with another account`);
    };
  return (
    <LinksAnotherLogin>
      <Typography>{`Or ${message} with`}:</Typography>
      <LinkLoginWrapper>
        <ButtonIcon onClick={onButtonClick}>
            <GitHubIcon />
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>
            <FacebookIcon />    
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>
            <GoogleIcon />
        </ButtonIcon>
      </LinkLoginWrapper>
    </LinksAnotherLogin>
  );
};