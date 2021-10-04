import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Tooltip,
  Zoom,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useState } from "react";
import FilmsInfo from "./FilmsInfo";
import NoImage from "./NoImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    maxHeight: 450,
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: 340,
      maxHeight: 100,
    },
  },
  cardContent: {
    backgroundColor: "#000",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "inherit",
    },
  },
  cardMedia: {
    height: 300,
    width: 200,
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 66,
    },
  },
  text: {
    display: "-webkit-box",
    overflow: "hidden",
    lineClamp: 1,
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontWeight: 500,
  },
  title: {
    display: "-webkit-box",
    overflow: "hidden",
    lineClamp: 1,
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    fontWeight: 700,
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
    fontWeight: 700,
  },
}));

const FilmsCard = ({ alt, img, title, type, year }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}t=${title}&y=${year.slice(
        0,
        4
      )}&type=${type === "game" ? "" : type}&plot=full`,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleClickOpen = () => {
    fetchData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      {img === "N/A" ? (
        <NoImage />
      ) : (
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt={alt}
          image={img}
        />
      )}
      <CardContent className={classes.cardContent}>
        <Box>
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
        </Box>
        <CardActions style={{ marginLeft: "auto" }}>
          <Button className={classes.btn} onClick={handleClickOpen}>
            Detalles
          </Button>
        </CardActions>
        <FilmsInfo
          open={open}
          close={handleClose}
          title={title}
          year={data["Year"]}
          genre={data["Genre"]}
          country={data["Country"]}
          director={data["Director"]}
          rating={data["imdbRating"]}
          poster={data["Poster"]}
          description={data["Plot"]}
        />
      </CardContent>
    </Card>
  );
};

export default FilmsCard;
