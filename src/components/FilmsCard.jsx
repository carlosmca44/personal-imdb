import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 140,
    maxHeight: 350,
    borderRadius: 0,
  },
  cardContent: {
    backgroundColor: "#000",
    color: "#fff",
  },
  text: {
    display: "-webkit-box",
    overflow: "hidden",
    lineClamp: 1,
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
  },
  btn: {
    width: 100,
    height: 26,
    backgroundColor: "#FDFF00",
    color: "#000",
    borderRadius: 8,
    alignContent: "center",
    "&:hover": {
      color: "#fff",
      border: "2px solid #FDFF00",
    },
  },
});

const FilmsCard = ({ alt, img, title, type, year }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={alt}
        height="200"
        width="170"
        image={img}
      />
      <CardContent className={classes.cardContent}>
        <CardActionArea>
          <Typography className={classes.text} gutterBottom variant="overline" component="p">
            {title}
          </Typography>
        </CardActionArea>
        <Typography className={classes.text} component="p">{type}</Typography>
        <Typography className={classes.text} component="p">Año: {year}</Typography>
        <CardActions>
          <Button className={classes.btn}>Detalles</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FilmsCard;
