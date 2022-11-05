import { Logo } from "components";
import React from "react";
import { FooterWrapper, TextFooter } from "./Footer.styles";

export const Footer: React.FC = () => {
  const currentYear = (new Date()).getFullYear();
  return (
    <FooterWrapper>
      <Logo />
      <TextFooter>
        © {currentYear} Todos os direitos reservados. Github: LaisFSGomes
      </TextFooter>
    </FooterWrapper>
  );
};