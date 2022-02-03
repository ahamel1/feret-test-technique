import { Card, CardContent, CardHeader, Modal } from "@mui/material";
import React from "react";
import FormAddWine from "./FormAddWine";
import backgroundImg from "../img/background-modal.png";
import logoWine from "../img/logo-wine.png";

interface ModalAddWineProps {
  show: boolean;
  close: () => void;
}

const ModalAddWine = (props: ModalAddWineProps) => {
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={props.show}
      onClose={props.close}
      aria-labelledby="modal-create-wine"
      aria-describedby="modal-form-wine"
    >
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            zIndex: "1",
            top: "-30px",
            left: "340px",
          }}
        >
          <img style={{ width: "10rem" }} src={logoWine} alt="logo-wine" />
        </span>
        <Card
          sx={{
            maxWidth: "50rem",
            padding: "1rem",
            position: "relative",
          }}
          variant="outlined"
        >
          <span
            style={{
              position: "absolute",
              bottom: "-85px",
              left: "-3%",
              transform: "rotate(5deg)",
            }}
          >
            <img
              style={{ width: "15rem" }}
              src={backgroundImg}
              alt="background-modal"
            />
          </span>

          <CardHeader
            title="Ajouter un vin"
            sx={{
              textAlign: "center",
              "& .MuiCardHeader-content": {
                height: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              },
            }}
          />
          <CardContent sx={{ bgcolor: "primary.light", marginBottom: "1rem" }}>
            *arrow* Ajouter un vin vous permet de renseigner d'une manière très
            générale les informations immuables d'un millésime à l'autre. Vous
            pourrez ensuite ajouter ses millésimes avec un niveau de précision
            beaucoup plus élevé.
          </CardContent>
          <FormAddWine />
        </Card>
      </div>
    </Modal>
  );
};

export default ModalAddWine;
