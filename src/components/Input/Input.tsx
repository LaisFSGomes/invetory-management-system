import { FormHelperText, InputLabel } from "@mui/material";
import React from "react";
import { Input as InputForm} from '@mui/material';
import { Form, HelpText } from "./Input.styles";
interface InputProps {
  label?: string;
  id?: string;
  type: "email" | "text" | "password";
  placeholder?: string;
  onChange:  (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  helpText?: string;
  colorHelp?: "red" | "green";
}
export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  value,
  helpText,
  colorHelp,
}) => {
  return(
    <Form >
      <InputLabel htmlFor={id} >
        {label}
      </InputLabel>
      <InputForm 
        id = {id}
        type={type} 
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disableUnderline= {true}
      />
      <HelpText className= {colorHelp} > {helpText} </HelpText>
    </Form>
  );
};