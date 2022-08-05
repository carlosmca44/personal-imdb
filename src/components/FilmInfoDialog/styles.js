import {
  Box,
  CardContent as MuiCardContent,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const CardContent = styled(MuiCardContent)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row-reverse",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

export const InfoContent = styled(Box)(({ theme }) => ({
  margin: "0 30px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 20px",
  },
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export const SingleDetail = styled("span")(({ theme }) => ({
  margin: "0 10px",
  padding: "0px 4px",
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 8,
    border: "1px solid black",
  },
}));

export const Poster = styled("img")(({ theme }) => ({
  maxHeight: "70vh",
  [theme.breakpoints.down("sm")]: {
    alignSelf: "center",
  },
}));
