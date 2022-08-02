import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const FilmCardRoot = styled(MuiCard)(({ theme }) => ({
  backgroundColor: "transparent",
  width: "300px",
  maxHeight: "350px",
}));

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  flexDirection: "column",
  margin: "1rem 0",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 300,
    maxHeight: 300,
  },
}));

export const CardContent = styled(MuiCardContent)(() => ({
  color: "#000",
}));

export const Tittle = styled(Typography)(() => ({
  backgroundColor: "transparent",
  color: "#000",
  display: "-webkit-box",
  overflow: "hidden",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  fontWeight: 700,
  fontSize: "1.2rem",
  "&:hover": {
    cursor: "default",
  },
}));

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: 250,
  width: 200,
  borderRadius: 0,
  margin: "auto",
  boxShadow: "5px 5px 5px #d4d4d4",
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: 166,
  },
  "&:hover": {
    height: 230,
    width: 160,
    borderRadius: 0,
    boxShadow: "10px 10px 15px #b0b0b0",
    transition: "all 0.5s",
  },
  "&:not(:hover)": {
    transition: "all 0.5s",
  },
}));
