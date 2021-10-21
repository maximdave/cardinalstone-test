import React from "react";
import { IconButton, Button, TextField } from "@mui/material";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SelectionField from "./SelectionField";

const SearchBar = () => (
  <div className="searchbar">
    <div style={{ display: "flex" }}>
      <TextField
        className="my_custom_textfield"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: (
            <Button variant="contained" startIcon={<FilterAltIcon />}>
              Filter
            </Button>
          ),
        }}
        fullWidth
        placeholder="Search requests"
      />
      <Button style={{ width: "25%", color: "#9FA2B4" }} variant="text">
        Reset Search
      </Button>
    </div>
    <div className="searchbar_filter_field">
      <Button
        style={{ background: "none", color: "#000" }}
        startIcon={<FilterAltIcon />}
      >
        Filter by:
      </Button>

      <SelectionField placeholder="Type" items={["DATE", "APPLICATION"]} />
      <SelectionField
        placeholder="Status"
        items={["Paid", "Partialy Paid", "Not Paid", "Awaiting Confirmation"]}
      />

      <Button
        style={{ backgroundColor: "#2B2B2B" }}
        variant="contained"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </div>
  </div>
);

export default SearchBar;
