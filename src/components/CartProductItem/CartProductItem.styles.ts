import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

export const CardWrapper = styled(Box)({
  borderRadius: "5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#FFFFFF",
  padding: "0px 1em",
  "@media (min-width: 0px) and (max-width: 768px)": {
    maxWidth: "95%",
    padding: "0px 0.5em",
    margin: "0px",
  },
});
export const Product = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 10px",
  gap: 10,
  "@media (min-width: 0px) and (max-width: 480px)": {
    flexDirection: "column",
    padding: "0px",
    gap: 0,
  },
  "@media (min-width: 481px) and (max-width: 768px)": {
    padding: "0px",
    gap: 0,
  },
});
export const Image = styled("img")({
  height: 60,
  width: 60,
  cursor: "pointer",
});
export const Title = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "1.1em",
  color: "#000000",
  margin: "1em 0.5em",
  "&:hover": {
    transition: "all 0.5s",
    color: "#C71D1D",
  },
  "@media (min-width: 0px) and (max-width: 768px)": {
    fontSize: "0.8em",
    padding: "0px",
  },
});
export const Units = styled(Typography)({
  fontSize: "0.8em",
  fontWeight: 600,
  color: "#C71D1D",
  width: "4em",
  maxWidth: "4em",
  "@media (min-width: 0px) and (max-width: 768px)": {
    fontSize: "0.6em",
  },
});
export const Price = styled(Typography)({
  fontWeight: 500,
});
export const SalesInfo = styled(Box)({
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #C71D1D",
    borderRadius: "20px",
  },
  "@media (min-width: 0px) and (max-width: 768px)": {
    "& > div": {
      width: "50%",
    },
  },
});
export const Informs = styled(Box)({
  width: "20em",
  "@media (min-width: 0px) and (max-width: 768px)": {
    width: "80%",
  },
});
export const Button = styled("a")({
  padding: "0.2em",
  display: "flex",
  "& > svg": {
    color: "#C71D1D",
    fontSize: "1.7em",
    "&:hover": {
      transition: "all 0.5s",
      filter: "drop-shadow(0.2px 0.2px 0.3px #911515)",
    },
  },
  "@media (min-width: 0px) and (max-width: 768px)": {
    "& > svg": {
      fontSize: "1.5em",
    },
  },
});
export const UpAndDown = styled(Box)({
  margin: "0.5em",
  display: "flex",
  justifyContent: "flex-start",
  "@media (min-width: 0px) and (max-width: 768px)": {
    maxWidth: "40%",
  },
});
