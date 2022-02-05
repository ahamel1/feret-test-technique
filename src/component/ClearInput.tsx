import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import React from "react";
interface ClearInputProps {
  onClear: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const ClearInput = (props: ClearInputProps) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        width: "17px",
        height: "17px",
        right: "30px",
        padding: "0.1rem",
        color: "secondary.light",
      }}
      size="small"
      onClick={props.onClear}
    >
      <ClearIcon sx={{ width: "100%" }} />
    </IconButton>
  );
};

export default ClearInput;
