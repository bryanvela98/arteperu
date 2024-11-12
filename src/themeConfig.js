import { createTheme } from "@mui/material"; //method from MUI

//Changing default color for MUI items
export const customTheme = createTheme({
    palette: {
        primary: { main: "#A02334" },
        secondary: { main: "#FFAD60" }
    },
});