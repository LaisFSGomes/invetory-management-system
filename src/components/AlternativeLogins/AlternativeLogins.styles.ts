import { styled } from "@mui/system";
import { Box, IconButton } from "@mui/material";

export const LinksAnotherLogin = styled(Box)({
    display: "flex",
    flexDirection: "column",
    "& p": {
        color: "#000000",
        fontWeight: 600,
    },
});
export const LinkLoginWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
});
export const ButtonIcon = styled(IconButton)({
    color: "#000000",
    "&:hover": {
        background: "#C4C4C4",
    },
});