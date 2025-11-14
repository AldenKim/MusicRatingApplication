import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1DB954",
    },
    secondary: {
      main: "#191414",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E", 
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 20,
        },
        containedPrimary: {
          backgroundColor: "#1DB954",
          "&:hover": {
            backgroundColor: "#1ed760",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#B3B3B3",
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B3B3B3",
            },
            "&:hover fieldset": {
              borderColor: "#1DB954",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1DB954",
            },
          },
        },
      },
    },
  },
});

export default theme;