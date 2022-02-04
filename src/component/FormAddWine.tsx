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
import React, { useEffect, useState } from "react";

const array = [{ value: "test", label: "test" }];

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
  color: string;
  type: string;
  sweetness: string;
}

const FormAddWine = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedSweetness, setSelectedSweetness] = useState<string>("");
  const [keys, setKeys] = useState<string[]>([]);
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    undefined
  );

  const combinationsMap = new Map();

  GET_ALL_COMBINATIONS.forEach((combination) => {
    if (combinationsMap.has(combination.label)) {
      combinationsMap.get(combination.label).push({
        color: [combination.color],
        type: [combination.type],
        sweetness: [combination.sweetness],
      });
    } else {
      combinationsMap.set(combination.label, [
        {
          color: [combination.color],
          type: [combination.type],
          sweetness: [combination.sweetness],
        },
      ]);
    }
  });

  useEffect(() => {
    let allKeys = Array.from(combinationsMap.keys());
    setKeys(allKeys);
  }, []);

  console.log("keys", keys);
  console.log("result", combinationsMap);
  console.log("selectedLabel", selectedLabel);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
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
              defaultValue="Super nom"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-select-color"
              select
              label="Appélation"
              value={selectedLabel ? selectedLabel : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSelectedLabel(e.target.value);
              }}
              fullWidth
            >
              {keys.map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
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
              {selectedLabel ? (
                combinationsMap
                  .get(selectedLabel)
                  .map((el: CombinationsProps) => (
                    <MenuItem
                      key={el.color.toString()}
                      value={el.color.toString()}
                    >
                      {el.color.toString()}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem value="Rouge">Rouge</MenuItem>
              )}
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
              {selectedLabel ? (
                combinationsMap
                  .get(selectedLabel)
                  .map((el: CombinationsProps) => (
                    <MenuItem
                      key={el.type.toString()}
                      value={el.type.toString()}
                    >
                      {el.type.toString()}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem />
              )}
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
              {selectedLabel ? (
                combinationsMap
                  .get(selectedLabel)
                  .map((el: CombinationsProps) => (
                    <MenuItem
                      key={el.sweetness.toString()}
                      value={el.sweetness.toString()}
                    >
                      {el.sweetness.toString()}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem />
              )}
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
          <Button type="submit" variant="contained">
            Suivant
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default FormAddWine;
