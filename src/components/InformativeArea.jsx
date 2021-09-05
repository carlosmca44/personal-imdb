import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"

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
    color: "#c4c4c4"
  },
  text: {
    maxWidth: 300,
    textAlign: "center"
  }
})

const IArea = () => {
  const classes = useStyle()
  return (
    <Paper className={classes.root}>
      <div style={{display: "block"}}>
        <Typography variant="h2" className={classes.text}>
          🧐
        </Typography>
        <Typography className={classes.text} component="p">
          Descubre género, sinopsis, puntuaciones y más de tus series, películas y videojuegos favoritos
        </Typography>
      </div>
    </Paper>
  );
};

export default IArea;
