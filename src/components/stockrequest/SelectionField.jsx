import React from "react";
import { MenuItem, OutlinedInput, Select } from "@mui/material";

const SelectionField = ({ items, placeholder }) => {
  return (
    <div className="selection_field">
      <Select
        displayEmpty
        fullWidth
        value="vlei"
        onChange="ghj"
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p style={{ margin: 0, color: "#9FA2B4" }}>{placeholder}</p>;
          }

          return selected;
        }}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectionField;
