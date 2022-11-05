import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ProductsWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2em",
  padding: "3em 5em",
  "@media (min-width: 0px) and (max-width: 480px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  "@media (min-width: 481px) and (max-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (min-width: 769px) and (max-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
