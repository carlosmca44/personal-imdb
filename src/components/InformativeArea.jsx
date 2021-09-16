import { Paper, Snackbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      paddingBottom: 10,
      paddingTop: 10,
    },
    width: "50vw",
    height: "50vh",
    border: "2px solid #fff",
    backgroundColor: "transparent",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#c4c4c4",
    textAlign: "center",
  },
  text: {
    maxWidth: 300,
  },
  text2: {
    marginTop: 10,
    maxWidth: 500,
  },
  alert: {
    maxWidth: 600,
    [theme.breakpoints.down('sm')]: {
      width: "auto"
    }
  },
}));

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const emoji = ["🤷‍♀️", "🔍", "🧐"];
const feedback = [
  "No hemos encontrado lo que buscas, prueba con algo diferente",
  "Danos algo para buscar, así tal vez te podamos ayudar",
  "Descubre género, sinopsis, puntuaciones y más de tus series, películas y videojuegos favoritos",
];

const IArea = ({ errorI }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h2" className={classes.text}>
          {errorI === rQuery[0]
            ? emoji[0]
            : errorI === rQuery[1]
            ? emoji[1]
            : emoji[2]}
        </Typography>
        <Typography className={classes.text} component="p">
          {errorI === rQuery[0]
            ? feedback[0]
            : errorI === rQuery[1]
            ? feedback[1]
            : feedback[2]}
        </Typography>
      </Paper>
      <Snackbar
        className={classes.alert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        onClose={handleClose}
        onChange={handleClose}
        message={
          "🧏‍♂️ Los datos empleados en este sitio son tomados de la base de datos proveida por IMDb mediante su interfaz de programación de aplicaciones OMDb API. Si realizando una búsqueda correcta no encuentra resultados satisfactorios, lo mas posible es que lo que busca no se haya en la base de datos"
        }
      />
    </>
  );
};

export default IArea;
