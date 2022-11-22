import { Box } from "@mui/material";
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
  minWidth: "60vw",
  background: "#FFFFFF",
  borderRadius: "5px",
  marginTop: "4em",
  padding: "2em 6em",
  gap: "1.5em",
  backgroundImage: `url(${fireLogo})`,
  "& > svg": {
    color: "#C71D1D",
  },
  "@media (min-width: 900px)": {
    minWidth: "70vh",
  },
  "@media (min-width: 0px) and (max-width: 380px)": {
    marginTop: "70px",
    minWidth: "70vw",
    padding: "2em 1em",
    width: "90vw",
  },
});

export const Button = styled("button")({
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
export const HelpPasswordContainer = styled(Box)({
  background: "#FFF",
  borderRadius: "10px",
  marginTop: "10px",
  "& p": {
    fontSize: "0.7em",
  },
  "& span": {
    fontSize: "0.7em",
  },
});