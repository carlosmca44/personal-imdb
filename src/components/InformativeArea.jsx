import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  root: {
    width: "50vw",
    height: "50vh",
    border: "2px solid #fff",
    backgroundColor: "transparent",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#c4c4c4",
  },
  text: {
    maxWidth: 300,
    textAlign: "center",
  },
});

const rQuery = ["Movie not found!", "Incorrect IMDb ID."];

const emoji = ["🤷‍♀️", "🔍", "🧐"];
const feedback = [
  "No hemos encontrado lo que buscas, prueba con algo diferente",
  "Danos algo para buscar, así tal vez te podamos ayudar",
  "Descubre género, sinopsis, puntuaciones y más de tus series, películas y videojuegos favoritos",
];

const IArea = ({ errorI }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <div style={{ display: "block" }}>
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
      </div>
    </Paper>
  );
};

export default IArea;
