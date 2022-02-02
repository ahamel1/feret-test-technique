import { Grid, TextField, MenuItem } from "@mui/material";
import React from "react";

const array = [{ value: "test", label: "test" }];
const FormAddWine = () => {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Nom du vin"
            defaultValue="Bordeaux"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Appélation"
            value={"currency"}
            onChange={() => {
              console.log("changed");
            }}
            fullWidth
          >
            {array.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Couleur"
            value={"currency"}
            onChange={() => {
              console.log("changed");
            }}
            fullWidth
          >
            {array.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Type"
            value={"currency"}
            onChange={() => {
              console.log("changed");
            }}
            fullWidth
          >
            {array.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-select-currency"
            select
            label="Sucrosité"
            value={"currency"}
            onChange={() => {
              console.log("changed");
            }}
            fullWidth
          >
            {array.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormAddWine;
