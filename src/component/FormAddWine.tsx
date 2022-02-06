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
  Select,
  SelectChangeEvent,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ClearInput from "./ClearInput";
import {
  combinations as GET_ALL_COMBINATIONS,
  range as GET_RANGES,
} from "./datas";

interface CombinationsProps {
  label: string;
  color: string;
  type: string;
  sweetness: string;
}

const useStyles = makeStyles(() => ({
  input: {
    marginTop: "0.25rem",
  },
}));

const FormAddWine = () => {
  const styles = useStyles();

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
    const labelsArray = Array.from(
      new Set(
        filteredLabel.map((el) => {
          return el.label;
        })
      )
    );

    if (labelsArray.length === 1 && labelsArray[0] !== selectedLabel)
      setSelectedLabel(labelsArray[0]);
    return labelsArray;
  }

  function combinationsByColor(
    label?: string,
    type?: string,
    sweetness?: string
  ) {
    const filteredColor = GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (type === undefined || type === combination.type) &&
        (sweetness === undefined || sweetness === combination.sweetness)
    );
    const colorsArray = Array.from(
      new Set(
        filteredColor.map((el) => {
          return el.color;
        })
      )
    );

    if (colorsArray.length === 1 && colorsArray[0] !== selectedColor)
      setSelectedColor(colorsArray[0]);
    return colorsArray;
  }

  function combinationsByType(
    label?: string,
    color?: string,
    sweetness?: string
  ) {
    const filteredType = GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (color === undefined || color === combination.color) &&
        (sweetness === undefined || sweetness === combination.sweetness)
    );
    const typesArray = Array.from(
      new Set(
        filteredType.map((el) => {
          return el.type;
        })
      )
    );

    if (typesArray.length === 1 && typesArray[0] !== selectedType)
      setSelectedType(typesArray[0]);
    return typesArray;
  }

  function combinationsBySweetness(
    label?: string,
    color?: string,
    type?: string
  ) {
    const filteredSweetness = GET_ALL_COMBINATIONS.filter(
      (combination: CombinationsProps) =>
        (label === undefined || label === combination.label) &&
        (color === undefined || color === combination.color) &&
        (type === undefined || type === combination.type)
    );
    const sweetnessesArray = Array.from(
      new Set(
        filteredSweetness.map((el) => {
          return el.sweetness;
        })
      )
    );

    if (
      sweetnessesArray.length === 1 &&
      sweetnessesArray[0] !== selectedSweetness
    )
      setSelectedSweetness(sweetnessesArray[0]);
    return sweetnessesArray;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit:", {
      label: selectedLabel,
      color: selectedColor,
      type: selectedType,
      sweetness: selectedSweetness,
      range: selectedRange,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={styles.input}
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
            <FormControl fullWidth required variant="outlined">
              <InputLabel>Appélation</InputLabel>
              <Select
                input={<OutlinedInput label="Appélation" />}
                displayEmpty
                renderValue={() => selectedLabel}
                className={styles.input}
                id="outlined-select-label"
                value={selectedLabel || ""}
                onChange={(e: SelectChangeEvent) => {
                  setSelectedLabel(e.target.value as string);
                }}
                endAdornment={
                  selectedLabel ? (
                    <ClearInput onClear={() => setSelectedLabel(undefined)} />
                  ) : undefined
                }
              >
                {combinationsByLabel(
                  selectedColor,
                  selectedType,
                  selectedSweetness
                ).map((value: string, index: number) => {
                  let key = `${value}-${index}`;
                  return (
                    <MenuItem key={key} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel>Couleur</InputLabel>
              <Select
                input={<OutlinedInput label="Couleur" />}
                displayEmpty
                renderValue={() => selectedColor}
                color="primary"
                className={styles.input}
                required
                id="outlined-select-color"
                value={selectedColor || ""}
                onChange={(e: SelectChangeEvent) => {
                  setSelectedColor(e.target.value as string);
                }}
                endAdornment={
                  selectedColor ? (
                    <ClearInput onClear={() => setSelectedColor(undefined)} />
                  ) : undefined
                }
              >
                {combinationsByColor(
                  selectedLabel,
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
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel>Type</InputLabel>
              <Select
                input={<OutlinedInput label="Type" />}
                displayEmpty
                renderValue={() => selectedType}
                className={styles.input}
                required
                id="outlined-select-type"
                value={selectedType || ""}
                onChange={(e: SelectChangeEvent) => {
                  setSelectedType(e.target.value as string);
                }}
                endAdornment={
                  selectedType ? (
                    <ClearInput onClear={() => setSelectedType(undefined)} />
                  ) : undefined
                }
              >
                {combinationsByType(
                  selectedLabel,
                  selectedColor,
                  selectedSweetness
                ).map((value, index) => {
                  let key = `${value}-${index}`;
                  return (
                    <MenuItem selected={true} key={key} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth required variant="outlined">
              <InputLabel>Sucrosité</InputLabel>
              <Select
                input={<OutlinedInput label="Sucrosité" />}
                displayEmpty
                renderValue={() => selectedSweetness}
                className={styles.input}
                required
                id="outlined-select-sweetness"
                value={selectedSweetness || ""}
                onChange={(e: SelectChangeEvent) => {
                  setSelectedSweetness(e.target.value as string);
                }}
                endAdornment={
                  selectedSweetness ? (
                    <ClearInput
                      onClear={() => setSelectedSweetness(undefined)}
                    />
                  ) : undefined
                }
              >
                {combinationsBySweetness(
                  selectedLabel,
                  selectedColor,
                  selectedType
                ).map((value, index) => {
                  let key = `${value}-${index}`;
                  return (
                    <MenuItem key={key} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
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
                {GET_RANGES.map(
                  (range: { label: string; value: string }, index: number) => {
                    let key = `range-${range.value}-${index}`;
                    return (
                      <FormControlLabel
                        key={key}
                        value={range.value}
                        control={
                          <Radio
                            sx={{
                              color: "secondary.light",
                              "&.Mui-checked": {
                                color: "secondary.main",
                              },
                            }}
                          />
                        }
                        label={range.label}
                      />
                    );
                  }
                )}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column", alignItems: "end" }}
        >
          <Box
            sx={{
              textAlign: "end",
              color: "primary.main",
              marginBottom: "1rem",
              zIndex: "1",
            }}
          >
            Après cette étape, vous ne pourrez plus modifier ces informations.
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={
              !selectedName ||
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
