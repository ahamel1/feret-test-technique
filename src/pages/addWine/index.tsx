import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddWineModal from "./AddWineModal";
import iconAddWine from "../../img/create-wine.png";
import "./AddWineForm.css";

const AddWine = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <AddWineModal
          show={isOpen}
          close={() => {
            setIsOpen(false);
          }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <IconButton
          color="primary"
          sx={{ width: "12rem", minWidth: "12rem" }}
          onClick={() => setIsOpen(true)}
        >
          <img width="100%" src={iconAddWine} alt="create-wine" />
        </IconButton>
      </Box>
    </>
  );
};

export default AddWine;
