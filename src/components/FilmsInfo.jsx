import { Box, Dialog, DialogTitle, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NoImage from "./NoImage";

const useStyles = makeStyles((theme) => ({
  root: {},
  boxRoot: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  information: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  poster: {
    width: "auto",
    height: "70vh",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "start",
    },
    [theme.breakpoints.down("xs")]: {
      alignSelf: "center",
    },
  },
  sInfo: {
    marginLeft: 15,
    marginRight: 15,
  },
  infoContent: {
    marginLeft: 40,
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },
}));

const FilmsInfo = ({ open, close, title, poster, description }) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth
      maxWidth={"lg"}
      className={classes.root}
      open={open}
      onClose={close}
    >
      <Box className={classes.boxRoot}>
        {poster === "N/A" ? (
          <NoImage />
        ) : (
          <img className={classes.poster} alt={title} src={poster} />
        )}

        <Box className={classes.infoContent}>
          <DialogTitle>{title}</DialogTitle>
          <Box className={classes.information}>
            <Typography className={classes.sInfo}>nacionalidad</Typography>
            <Typography className={classes.sInfo}>director</Typography>
            <Typography className={classes.sInfo}>genero</Typography>
            <Typography className={classes.sInfo}>anno</Typography>
            <Typography className={classes.sInfo}>puntuacion</Typography>
          </Box>
          <Typography>{description}</Typography>
          <Typography>anno</Typography>
          <Typography>productora</Typography>
        </Box>
      </Box>
    </Dialog>
  );
};

export default FilmsInfo;
