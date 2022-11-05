import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FooterWrapper = styled("footer")({
  background: "#1A1A1A",
  width: "100%",
  padding: "0.3em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
export const TextFooter = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 400,
  color: "#E8E8E8",
  textAlign: "center",
});
