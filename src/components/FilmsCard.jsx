import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 200,
    maxHeight: 450,
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
    fontWeight: 500
  },
  title: {
    display: "-webkit-box",
    overflow: "hidden",
    lineClamp: 1,
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontWeight: 700
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
  tooltipCW: {
    maxWidth: 100,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: 700
  },
});

const FilmsCard = ({ alt, img, title, type, year }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={alt}
        height="300"
        width="200"
        image={img}
      />
      <CardContent className={classes.cardContent}>
        <Tooltip
          arrow
          classes={{ tooltip: classes.tooltipCW }}
          title={title}
          placement="top-start"
          TransitionComponent={Zoom}
        >
          <Typography
            className={classes.title}
            gutterBottom
            variant="overline"
            component="p"
          >
            {title}
          </Typography>
        </Tooltip>
        <Typography className={classes.text} component="p">
          {type}
        </Typography>
        <Typography className={classes.text} component="p">
          Año: {year}
        </Typography>
        <CardActions>
          <Button className={classes.btn}>Detalles</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FilmsCard;
