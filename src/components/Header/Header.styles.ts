import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const HeaderWrapper = styled("header")({
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr 1fr",
  alignItems: "center",
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "6.25rem",
  background: "#F0F0F0",
  padding: "0px 1rem",
  justifyItems: "center",
});

export const Navbar = styled("nav") ({
  display: "flex",
  justifyContent: "space-around",
  gridColumnStart: "3",
});
export const NavbarItem = styled("a")({
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "1rem",
  lineHeight: "1.188rem",
  color: "#000000",
  padding: "0 1rem"
});
export const Avatar = styled("img")({
  width: "3.125rem",
  height: "3.125rem",
  borderRadius: "100%",
  border: "2px solid #C71D1D",
});