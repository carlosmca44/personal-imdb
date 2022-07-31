import {
  Button,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Tooltip as MuiToolTip,
  Typography
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles"

export const FilmCardRoot = styled(MuiCard)(({ theme }) => ({
  width: '200px',
  maxHeight: '450px',
  borderRadius: 0,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    width: 340,
    maxHeight: 100,
  },
}))

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    width: "inherit",
  },
}))

export const Tooltip = styled(MuiToolTip)(() => ({
  maxWidth: 100,
  backgroundColor: "#fff",
  color: "#000",
  fontWeight: 700,
}))

export const Tittle = styled(Typography)(() => ({
  backgroundColor: "transparent",
  color: "#fff",
  display: "-webkit-box",
  overflow: "hidden",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  fontWeight: 700,
}))

export const Texts = styled(Typography)(() => ({
  display: "-webkit-box",
  overflow: "hidden",
  lineClamp: 1,
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  fontWeight: 500,
}))

export const DetailsButton = styled(Button)(() => ({
  width: 100,
  height: 26,
  backgroundColor: "#FDFF00",
  color: "#000",
  borderRadius: 8,
  alignContent: "center",
  "&:hover": {
    color: "#fff",
    border: "2px solid #FDFF00",
    cursor: "default",
  },
}))

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: 300,
  width: 200,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: 66,
  },
}))