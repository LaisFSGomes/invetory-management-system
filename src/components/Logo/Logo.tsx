import React from "react";
import { LogoText, LogoWrapper } from "./Logo.styles";
import logoStore from "assets/icons/logoStore.svg";

export const Logo: React.FC = () => {
  return(
    <LogoWrapper>
      <img src={logoStore} alt="aa" /> 
        <LogoText>
          FIRE STORE
        </LogoText>
    </LogoWrapper>
  );
}