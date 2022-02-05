import { createTheme } from "@mui/material/styles";

const fontH5 = "'Playfair Display', serif";
const fontBody1 = "'Lato', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9F8D93",
      light: "#FCF6F6",
      dark: "#432E35",
    },
    secondary: {
      main: "#632D3E",
      light: "#D0BDC3",
    },
    info: {
      main: "#E5E5E5",
    },
  },
  typography: {
    h5: {
      fontFamily: fontH5,
      fontSize: "1.8rem",
      color: "#432E35",
    },
    body1: {
      fontFamily: fontBody1,
      color: "#9F8D93",
    },
    button: {
      fontFamily: fontBody1,
      color: "#432E35",
    },
  },
});

export default theme;
