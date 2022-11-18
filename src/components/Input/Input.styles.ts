import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const Form = styled(FormControl)({
  width: "100%",
  "& label.Mui-focused": {
    color: "#C71D1D",
    fontWeight: 600,
  },
  "& div": {
    borderRadius: "10px",
    background: "#EEEEEE",
    border: "0px",
    "& input":{
      border: "0px",
      textAlign: "center",
    },
  }
});