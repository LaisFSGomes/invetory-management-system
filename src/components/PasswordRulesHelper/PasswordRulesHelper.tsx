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

interface PasswordRulesHelperProps {
  lenghtIsValid: boolean;
  specialCharIsValid: boolean;
  upperIsValid: boolean;
  lowerIsValid: boolean;
  numberIsValid: boolean;
  sequenceNumberIsValid: boolean;
  sequenceCharIsValid: boolean;
}

export const PasswordRulesHelper: React.FC<PasswordRulesHelperProps> = ({
  lenghtIsValid,
  specialCharIsValid,
  upperIsValid,
  lowerIsValid,
  numberIsValid,
  sequenceNumberIsValid,
  sequenceCharIsValid,
}) => {
  return (
    <HelpPasswordContainer>
      <Typography>Password's Rules</Typography>
      <List>
        <ListItem disablePadding className={lenghtIsValid ? "right" : "wrong"}>
          <ListItemIcon className={lenghtIsValid ? "right" : "wrong"}>
            {lenghtIsValid ? <CheckCircleRoundedIcon /> : <CancelRoundedIcon />}
          </ListItemIcon>
          <ListItemText primary="At least 8 characters" />
        </ListItem>

        <ListItem
          disablePadding
          className={specialCharIsValid ? "right" : "wrong"}
        >
          <ListItemIcon className={specialCharIsValid ? "right" : "wrong"}>
            {specialCharIsValid ? (
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
            upperIsValid && lowerIsValid && numberIsValid ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              upperIsValid && lowerIsValid && numberIsValid ? "right" : "wrong"
            }
          >
            {upperIsValid && lowerIsValid && numberIsValid ? (
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
            sequenceNumberIsValid && sequenceCharIsValid ? "right" : "wrong"
          }
        >
          <ListItemIcon
            className={
              sequenceNumberIsValid && sequenceCharIsValid ? "right" : "wrong"
            }
          >
            {sequenceNumberIsValid && sequenceCharIsValid ? (
              <CheckCircleRoundedIcon />
            ) : (
              <CancelRoundedIcon />
            )}
          </ListItemIcon>
          <ListItemText primary="Cannot have sequence of numbers" />
        </ListItem>
      </List>
    </HelpPasswordContainer>
  );
};
