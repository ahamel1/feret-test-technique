import {
  IconButton,
  Card,
  CardContent,
  CardHeader,
  Modal,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import AddWineForm from "./AddWineForm";
import backgroundImg from "../../img/background-modal.png";
import logoWine from "../../img/logo-wine.png";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
interface AddWineModalProps {
  show: boolean;
  close: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: "10px",
    maxWidth: "50rem",
    padding: "1rem",
    position: "relative",
  },
  cardHeader: {
    textAlign: "center",
    "& .MuiCardHeader-content": {
      height: "3rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
      zIndex: "2",
      "@media (max-width:600px)": {
        height: "1rem",
      },
    },
  },
  cardContent: {
    marginBottom: "1rem",
    borderRadius: "10px",
    padding: "1rem 2rem",
  },
  topLogo: {
    position: "absolute",
    width: "100%",
    zIndex: "1",
    top: "-40px",
    textAlign: "center",
    "@media (max-width:600px)": {
      display: "none",
    },
  },
  backgroundImg: {
    position: "absolute",
    bottom: "-140px",
    left: "-7%",
  },
  closeModal: {
    position: "absolute",
    zIndex: "10",
    display: "flex",
    justifyContent: "end",
    width: "100%",
  },
  replyIcon: {
    transform: "rotate(180deg)",
    verticalAlign: "bottom",
  },
}));

const AddWineModal = (props: AddWineModalProps) => {
  const styles = useStyles();

  return (
    <Modal
      className={styles.modal}
      open={props.show}
      onClose={props.close}
      aria-labelledby="modal-create-wine"
      aria-describedby="modal-form-wine"
    >
      <div style={{ position: "relative" }}>
        <div className={styles.closeModal}>
          <IconButton onClick={props.close}>
            <CloseIcon sx={{ color: "secondary.main" }} />
          </IconButton>
        </div>
        <div className={styles.topLogo}>
          <img style={{ width: "10rem" }} src={logoWine} alt="logo-wine" />
        </div>
        <Card className={styles.card} variant="outlined">
          <span className={styles.backgroundImg}>
            <img
              style={{ width: "65%" }}
              src={backgroundImg}
              alt="background-modal"
            />
          </span>

          <CardHeader className={styles.cardHeader} title="Ajouter un vin" />
          <CardContent
            className={styles.cardContent}
            sx={{ bgcolor: "primary.light", color: "primary.dark" }}
          >
            <ReplyIcon className={styles.replyIcon} fontSize="small" />
            Ajouter un vin vous permet de renseigner d'une manière très générale
            les informations immuables d'un millésime à l'autre. Vous pourrez
            ensuite ajouter ses millésimes avec un niveau de précision beaucoup
            plus élevé.
          </CardContent>
          <AddWineForm />
        </Card>
      </div>
    </Modal>
  );
};

export default AddWineModal;
