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
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0,
        },
        body: {
          margin: 0,
          backgroundColor: '#f4f4f4',
          fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            'sans-serif']
        },
      }
    }
  }
})

export default theme