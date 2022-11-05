import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const LogoWrapper = styled(Link)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textDecoration: "none",
  "& svg": {
    color: "#C71D1D",
    fontSize: "2em",
  },
  "&:hover": {
    "& svg": {
      transition: "all 0.5s",
      color: "#911515",
    },
    "& p": {
      transition: "all 0.5s",
      color: "#911515",
    },
  },
  "@media (min-width: 0px) and (max-width: 480px)": {
    flexDirection: "column",
    "& img": {
      width: "30px",
    },
    "& p": {
      fontSize: "15px",
    },
  },
});
export const LogoText = styled(Typography)({
  fontSize: 24,
  fontWeight: 800,
  color: "#C71D1D",
  lineHeight: "30px",
  maxWidth: "84px",
  marginLeft: "5px",
});