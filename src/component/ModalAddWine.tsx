import { Card, CardContent, CardHeader, Modal } from "@mui/material";
import React from "react";
import FormAddWine from "./FormAddWine";

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
      <Card sx={{ width: "50%", padding: "1rem" }} variant="outlined">
        <CardHeader title="Ajouter un vin" sx={{ textAlign: "center" }} />
        <CardContent sx={{ bgcolor: "primary.main", marginBottom: "1rem" }}>
          *arrow* Ajouter un vin vous permet de renseigner d'une manière très
          générale les informations immuables d'un millésime à l'autre. Vous
          pourrez ensuite ajouter ses millésimes avec un niveau de précision
          beaucoup plus élevé.
        </CardContent>
        <FormAddWine />
      </Card>
    </Modal>
  );
};

export default ModalAddWine;
