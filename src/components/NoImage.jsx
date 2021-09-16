import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 200,
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 66,
      textAlign: "center",
    },
    backgroundColor: "#454545",
    color: "#c4c4c4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const NoImage = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography>No Image</Typography>
    </Box>
  );
};

export default NoImage;
