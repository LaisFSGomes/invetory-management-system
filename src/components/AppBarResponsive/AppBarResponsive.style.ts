import { AppBar, Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";

export const ContainerLarge = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 100fr 1fr",
  alignItems: "center",
  gap: 20,
  flexGrow: 1,
  "& > :nth-child(1)":{
  },
  "@media (min-width: 0px) and (max-width: 480px)": {
    display: "none",
  },
});
export const Navbar = styled("nav")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 20,
});
export const NavItem = styled(Link)({
  fontFamily: "Inter",
  fontSize: "1.2em",
  fontWeight: 600,
  textDecoration: "none",
  color: "#000000",
  display: "flex",
  "&:hover": {
    color: "#C71D1D",
  },
});
export const NavItemCart = styled(Link)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  fontFamily: "Inter",
  fontWeight: 600,
  textDecoration: "none",
  color: "#000000",
  "& svg": {
    fontSize: "2rem",
    color: "#C71D1D",
    "&:hover": {
      color: "#911515",
    },
  },
  "&:hover": {
    color: "#911515",
  },
});
export const AmountItems = styled(Box)({
  background: "#89D963",
  borderRadius: "100%",
  width: 15,
  height: 15,
  fontSize: "0.65em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  bottom: "-5px",
});
export const AmountTotal = styled(Box)({
  fontSize: "0.65em",
})

export const ContainerMobile = styled(Box)({
  display: "none",
  "@media (min-width: 0px) and (max-width: 480px)": {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
});
export const ButtonBarr = styled(IconButton)({
  "& svg": {
    color: "#C71D1D",
  },
  "&:hover": {
    background: "#FFFFFF",
  },
});
export const ItemsContainer = styled(Box)({
  display: "flex",
  flexGrow: 1,
  "@media (min-width: 0px) and (max-width: 480px)": {
    display: "none",
  },
});
export const MenuMobile = styled(Menu)({
  display: "none",
  "@media (min-width: 0px) and (max-width: 480px)": {
    display: "flex",
    border: "1px solid red"
  },
});
export const UserImage = styled("img")({
  display: "flex",
  width: 60,
  height: 60,
  marginLeft: 20,
  borderRadius: "100%",
  border: "5px solid #C71D1D",
  "&:hover": {
    transition: "all 0.5s",
    border: "0.1px solid #911515",
  },
});
export const AppBarWrapper = styled(AppBar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#FFFFFF",
  maxHeight: "90px",
});