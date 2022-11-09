import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const CartWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
});
export const Title = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "1.5em",
  color: "#000000",
  alignSelf: "flex-start",
  padding: "2rem",
});
export const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: "1em",
  alignItems: "center",
  padding: "0px 3em",
  "@media (min-width: 0px) and (max-width: 933px)": {
    flexDirection: "column",
    padding: "0px 1em",
  },
});
export const CardProducts = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginBottom: 20,
});
export const BuyCard = styled(Box)({
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  width: "80%",
  borderRadius: "5px",
  padding: "1em",
  "@media (min-width: 0px) and (max-width: 933px)": {
    alignSelf: "center",
  },
});
export const BuyItem = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
export const BuyText = styled(Typography)({
  fontSize: "1.3em",
  color: "#212121",
});
export const BuyValue = styled(Typography)({
  fontWeight: 600,
  fontSize: "1.3em",
  color: "#212121",
});
export const BuyButton = styled("button")({
  width: "100%",
  height: 40,
  position: "absolute",
  bottom: 0,
});
export const DeleteCartButton = styled("button")({
  display: "flex",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  // marginRight: "4em",
  background: "#C71D1D",
  flexGrow: 0,
  height: "30px",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "16px",
  padding: "1em",
  "&:hover": {
    transition: "all 0.5s",
    color: "#F0F0F0",
    background: "#911515",
    cursor: "pointer",
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
