import React from "react";
import { PagesRoutes } from "features/constants";
import { LogoWrapper, LogoText } from "./Logo.styles";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
export const Logo: React.FC = () => (
  <LogoWrapper to={PagesRoutes.products}>
    <WhatshotRoundedIcon />
    <LogoText>Fakemart</LogoText>
  </LogoWrapper>
);
