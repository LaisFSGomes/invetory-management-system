import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { HelpPasswordContainer } from "./PasswordRulesHelper.styles";
import {
  validateLength,
  validateLowerCase,
  validateUpperCase,
  validateSpecial,
  validateNumbers,
  validadeNumberSequence,
  validadeCharSequence,
} from "utils/ValidadePassword";

interface PasswordRulesHelperProps {
  password: string;
}

export const PasswordRulesHelper: React.FC<PasswordRulesHelperProps> = ({
  password,
}) => {
  const [length, setLength] = React.useState<boolean>(false);
  const [specialChar, setSpecialChar] = React.useState<boolean>(false);
  const [upper, setUpper] = React.useState<boolean>(false);
  const [lower, setLower] = React.useState<boolean>(false);
  const [number, setNumber] = React.useState<boolean>(false);
  const [sequenceNum, setSequenceNum] = React.useState<boolean>(false);
  const [sequenceChar, setSequenceChar] = React.useState<boolean>(false);

  const validade = () => {
    setLength(validateLength(password));
    setSpecialChar(validateSpecial(password));
    setUpper(validateUpperCase(password));
    setLower(validateLowerCase(password));
    setNumber(validateNumbers(password));
    setSequenceNum(validadeNumberSequence(password));
    setSequenceChar(validadeCharSequence(password));
  }
  React.useEffect(()=> {
    validade();
  }, [password])
  
  return (
    <HelpPasswordContainer>
      <Typography>Password's Rules</Typography>
      <List>
        <ListItem disablePadding className={length ? "right" : "wrong"}>
          <ListItemIcon className={length ? "right" : "wrong"}>
            {length ? <CheckCircleRoundedIcon /> : <CancelRoundedIcon />}
          </ListItemIcon>
          <ListItemText primary="At least 8 characters" />
        </ListItem>

        <ListItem
          disablePadding
          className={specialChar ? "right": "wrong"}
        >
          <ListItemIcon className={specialChar ? "right" : "wrong"}>
            {specialChar ? (
              <CheckCircleRoundedIcon />
            ) : (
              <CancelRoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Between 8 and 18 characters" />
        </ListItem>

        <ListItem
          disablePadding
          className={
            upper && lower && number ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              upper && lower && number ? "right" : "wrong"
            }
          >
            {upper && lower && number ? (
              <CheckCircleRoundedIcon />
            ) : (
              <CancelRoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="contain uppercase, lowercase and numbers" />
        </ListItem>

        <ListItem
          disablePadding
          className={
            sequenceNum ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              sequenceNum ? "right" : "wrong"
            }
          >
            {sequenceNum ? (
              <CheckCircleRoundedIcon />
            ) : (
              <CancelRoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Cannot have sequence of numbers" />
        </ListItem>

        <ListItem
          disablePadding
          className={
           sequenceChar ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              sequenceChar ? "right" : "wrong"
            }
          >
            {sequenceChar ? (
              <CheckCircleRoundedIcon />
            ) : (
              <CancelRoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Cannot have sequence of letters" />
        </ListItem>
      </List>
    </HelpPasswordContainer>
  );
};
