import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const CardWrapper = styled(Box)({
  background: "#FFFFFF",
  padding: "1rem",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  "&:hover": {
    transition: "all 0.5s",
    boxShadow: "4px 4px 4px #E3E3E3",
    "& h1": {
      color: "#C71D1D",
    },
    "& p + p": {
      fontWeight: 550,
    },
  },
});
export const Image = styled("img")({
  height: 210,
  width: 200,
  cursor: "pointer",
});
export const ProductTitle = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "1.1em",
  color: "#000000",
  textAlign: "justify",
  margin: "1em 0em",
});
export const ProductDescription = styled(Typography)({
  fontWeight: 300,
  fontSize: "1em",
  lineHeight: "1rem",
  letterSpacing: 0,
  textAlign: "left",
  color: "#272727",
});
export const ProductPrice = styled(Typography)({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "29px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
  margin: "0.5em 0em",
});
export const Button = styled("button")({
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
