import { Box, Button as Btn } from "@mui/material";
import { styled } from "@mui/system";
import fireLogo from "assets/img/fireLogo.svg";
import { Link } from "react-router-dom";

export const LoginWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
});

export const LoginContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  background: "#FFFFFF",
  borderRadius: "5px",
  padding: "3em 6em",
  gap: "2em",
  backgroundImage: `url(${fireLogo})`,
  "& > svg": {
    color: "#C71D1D",
  },
  "@media (min-width: 0px) and (max-width: 380px)": {
    padding: "3em 1em",
    width: "90vw",
  },
});

export const Button = styled(Btn)({
  alignSelf: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#89D963",
  flexGrow: 0,
  height: "51px",
  width: "80%",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "16px",
  "&:hover": {
    transition: "all 0.5s",
    color: "#F0F0F0",
    background: "#82CF5D",
    cursor: "pointer",
  },
});

export const LinkRegister = styled(Link)({
  color: "#C71D1D",
});