import { Box, styled, Typography } from "@mui/material";

export const ProductDescWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6em 0em",
});
export const CardContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  width: "90%",
  background: "#FFFFFF",
  borderRadius: "5px",
  padding: "4%",
  gap: "50px",
  "&:hover": {
    transition: "all 0.5s",
    boxShadow: "4px 4px 4px #E3E3E3",
  },
  "@media (min-width: 0px) and (max-width: 1115px)": {
    flexDirection: "column",
    margin: "1%",
  },
});
export const InfoWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Image = styled("img")({
  width: "150px",
  borderRadius: 5,
  alignSelf: "flex-start",
  "@media (min-width: 0px) and (max-width: 1115px)": {
    alignSelf: "center",
    "&": {
      margin: "0px auto",
    },
  },
  "@media (min-width: 481px) and (max-width: 768px)": {
    "&": {
      margin: "0px auto",
    },
  },
  "@media (min-width: 769px) and (max-width: 1024px)": {
    "&": {
      margin: "0px auto",
    },
  },
});

export const DescriptionWrapper = styled("div")({
  width: "40vw",
  height: "fit-content",
  backgroundColor: "#FFFFFF",
  padding: 20,
  borderRadius: 5,
});

export const Title = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "1.5em",
  color: "#000000",
});

export const Rating = styled(Typography)({
  fontSize: "18px",
  color: "#656565",
  alignSelf: "flex-end",
});

export const Description = styled(Typography)({
  marginTop: 10,
  fontSize: 18,
  color: "#222",
  textAlign: "justify",
  textIndent: 50,
});

export const Price = styled(Typography)({
  fontSize: "2em",
  fontWeight: 500,
  lineHeight: "29px",
  letterSpacing: 0,
  color: "#030303",
});

export const Button = styled("button")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#89D963",
  flexGrow: 0,
  height: "51px",
  width: "40%",
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
