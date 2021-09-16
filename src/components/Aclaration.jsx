import { Box, Button, Drawer, makeStyles, Paper, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20px 0px"
  },
  container: {
    width: "30vw",
    marginLeft: "5%",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      marginLeft: 10,
      marginRight: 10,
    },
  },
  openButton: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: "4px 0px 0px 4px",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "white"
    }
  }
}));

const Aclaration = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Box className={classes.root}>
      <Button className={classes.openButton} onClick={handleDrawerToggle}>
        <Typography>
          ❗❗
        </Typography>
      </Button>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
          <Paper className={classes.container}>
            <Typography variant="h2">
              🧏‍♂️
            </Typography>
            <Typography component="p">
              Los datos empleados en este sitio son tomados de la base de datos 
              proveida por IMDb mediante su API OMDb. Si realizando una búsqueda correcta no encuentra 
              resultados satisfactorios, lo mas posible es que lo que busca no se haya en la base de datos 
              anteriormente mencionada
            </Typography>
          </Paper>
      </Drawer>
    </Box>
  );
};

export default Aclaration;
