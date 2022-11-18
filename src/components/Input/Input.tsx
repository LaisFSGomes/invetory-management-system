import { InputLabel } from "@mui/material";
import React from "react";
import { Input as InputForm} from '@mui/material';
import { Form } from "./Input.styles";
interface InputProps {
  label?: string;
  id?: string;
  type: string;
  placeholder?: string;
  onChange:  (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  placeholder,
  onChange,
  value,
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
    </Form>
  );
};