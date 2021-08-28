import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: "#90D223"
        },
        secondary: {
            main: "#FDFF00"
        }
    },
    overrides: {
        MuiAppBar: {
            root: {
                boxShadow: "none",
            }
        }
    }
})

export default theme