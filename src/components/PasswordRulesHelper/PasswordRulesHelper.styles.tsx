import { styled } from "@mui/system";
import { Box } from "@mui/material";
export const HelpPasswordContainer = styled(Box)({
    background: "#F1F1F1",
    borderRadius: "10px",
    padding: "0.5em",
    display: "flex",
    flexDirection: "column",
    "& p": {
      color: "#313131",
      fontSize: "0.8em",
      fontWeight: 600,
    },
    "& .MuiListItemIcon-root.right": {
      "& svg": {
        color: "#5D9D3E",
      },
    },
    "& .MuiListItemIcon-root.wrong": {
      "& svg": {
        color: "#C71D1D",
      },
    },
    "& span": {
      fontSize: "0.8em",
      fontWeight: 600,
    },
    "& .right span": {
      color: "#5D9D3E",
    },
    "& .wrong span": {
      color: "#C71D1D",
    },
  });