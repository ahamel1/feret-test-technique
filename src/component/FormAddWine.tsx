import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";

// retour d'API
const GET_ALL_COMBINATIONS = [
  {
    label: "Sainte-Foy Côtes de Bordeaux",
    color: "Rouge",
    type: "Tranquille",
    sweetness: "Sec",
  },
  {
    label: "Sainte-Foy Côtes de Bordeaux",
    color: "Blanc",
    type: "Tranquille",
    sweetness: "Sec",
  },
  {
    label: "Sainte-Foy Côtes de Bordeaux",
    color: "Blanc",
    type: "Tranquille",
    sweetness: "Moelleux",
  },
  {
    label: "Sainte-Foy Côtes de Bordeaux",
    color: "Blanc",
    type: "Tranquille",
    sweetness: "Liquoreux",
  },
  {
    label: "Sauternes",
    color: "Blanc",
    type: "Tranquille",
    sweetness: "Liquoreux",
  },
  {
    label: "Bordeaux",
    color: "Blanc",
    type: "Tranquille",
    sweetness: "Sec",
  },
  {
    label: "Bordeaux",
    color: "Rouge",
    type: "Tranquille",
    sweetness: "Sec",
  },
  {
    label: "Bordeaux",
    color: "Rosé",
    type: "Tranquille",
    sweetness: "Sec",
  },
];

interface CombinationsProps {
  label: string;
  color: string;
  type: string;
  sweetness: string;
}

const FormAddWine = () => {
  const [selectedName, setSelectedName] = useState<string | undefined>(
    undefined
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );
  const [selectedSweetness, setSelectedSweetness] = useState<
    string | undefined
  >(undefined);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined
  );
  const [selectedRange, setSelectedRange] = useState<string | undefined>(
    undefined
  );

  function combinationsByLabel(
    color?: string,
    type?: string,
    sweetness?: string
  ) {
    const filteredLabel = GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (color === undefined || color === combination.color) &&
        (type === undefined || type === combination.type) &&
        (sweetness === undefined || sweetness === combination.sweetness)
    );

    const arr = filteredLabel.map((el) => {
      return el.label;
    });

    return Array.from(new Set(arr));
  }
  console.log(combinationsByLabel().length);
  function combinationsByColor(
    label?: string,
    type?: string,
    sweetness?: string
  ) {
    return GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (type === undefined || type === combination.type) &&
        (sweetness === undefined || sweetness === combination.sweetness)
    );
  }

  function combinationsByType(
    label?: string,
    color?: string,
    sweetness?: string
  ) {
    return GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (color === undefined || color === combination.color) &&
        (sweetness === undefined || sweetness === combination.sweetness)
    );
  }

  function combinationsBySweetness(
    label?: string,
    color?: string,
    type?: string
  ) {
    return GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (color === undefined || color === combination.color) &&
        (type === undefined || type === combination.type)
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit:", { label: selectedLabel });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              color="primary"
              required
              label="Nom du vin"
              inputProps={{
                maxLength: 25,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedName(e.target.value);
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-select-label"
              select
              label="Appélation"
              value={selectedLabel ? selectedLabel : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedLabel(e.target.value);
              }}
              fullWidth
            >
              {combinationsByLabel(
                selectedColor,
                selectedType,
                selectedSweetness
              ).map((value, index) => {
                let key = `${value}-${index}`;
                return (
                  <MenuItem key={key} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="outlined-select-color"
              select
              label="Couleur"
              value={selectedColor ? selectedColor : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedColor(e.target.value);
              }}
              fullWidth
            >
              {combinationsByColor(
                selectedLabel,
                selectedType,
                selectedSweetness
              ).map((value, index) => {
                let key = `${value.color}-${index}`;
                return (
                  <MenuItem key={key} value={value.color}>
                    {value.color}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="outlined-select-type"
              select
              label="Type"
              value={selectedType ? selectedType : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedType(e.target.value);
              }}
              fullWidth
            >
              {combinationsByType(
                selectedLabel,
                selectedColor,
                selectedSweetness
              ).map((value, index) => {
                let key = `${value.type}-${index}`;
                return (
                  <MenuItem key={key} value={value.type}>
                    {value.type}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="outlined-select-sweetness"
              select
              label="Sucrosité"
              value={selectedSweetness ? selectedSweetness : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedSweetness(e.target.value);
              }}
              fullWidth
            >
              {combinationsBySweetness(
                selectedLabel,
                selectedColor,
                selectedType
              ).map((value, index) => {
                let key = `${value.sweetness}-${index}`;
                return (
                  <MenuItem key={key} value={value.sweetness}>
                    {value.sweetness}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{ marginBottom: "3rem" }}>
            <FormControl>
              <FormLabel required id="radio-buttons-group-label">
                Rang du vin
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSelectedRange(e.target.value);
                }}
              >
                <FormControlLabel
                  value="first-wine"
                  control={<Radio color="secondary" />}
                  label="Premier vin"
                />
                <FormControlLabel
                  value="second-wine"
                  control={<Radio color="secondary" />}
                  label="Second vin"
                />
                <FormControlLabel
                  value="other-wine"
                  control={<Radio color="secondary" />}
                  label="Autre vin"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
        >
          <Box
            sx={{ color: "primary.main", marginBottom: "1rem", zIndex: "1" }}
          >
            Après cette étape, vous ne pourrez plus modifier ces informations.
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={
              !selectedColor ||
              !selectedLabel ||
              !selectedType ||
              !selectedSweetness ||
              !selectedRange
            }
          >
            Suivant
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default FormAddWine;
