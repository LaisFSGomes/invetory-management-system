import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export const LogoWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "3%",
  "& img": {
    transform: "rotate(15deg)",
  },
});
export const LogoText = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: 800,
  fontSize: "1.547rem",
  lineHeight: "1.875rem",
  color: "#C71D1D",
  maxWidth: "5.25rem",
});