import React from 'react';
import { TextField } from '@mui/material';

const FormGroup = ({
  headerText,
  labelFor,
  placeholder,
  onChange,
  type = 'text',
  value,
}) => (
  <div className="form_group">
    <h2 className="header_text_thin">{headerText}</h2>

    <TextField
      required
      value={value}
      type={type}
      onChange={onChange}
      id={labelFor}
      name={labelFor}
      placeholder={placeholder}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      size="small"
    />
  </div>
);

export default FormGroup;
