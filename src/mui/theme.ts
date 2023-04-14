import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontFamily: 'Inter',
          minWidth: '0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontFamily: 'Inter'
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#1F2937",
      contrastText: "#A5ACBA",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#6B7280",
    },
    success: {
      main: "#F97316",
      contrastText: "#FFFFFF",
    }
  }
});

export default theme;