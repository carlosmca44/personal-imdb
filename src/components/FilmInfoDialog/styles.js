import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const RootContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row-reverse",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

export const InfoContent = styled(Box)(({ theme }) => ({
  marginLeft: 30,
  marginRight: 30,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 20,
    marginRight: 20,
  },
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export const SingleDetail = styled(Typography)(() => ({
  marginLeft: 10,
  marginRight: 10,
  border: "1px solid black",
  padding: "0px 4px 0px 4px",
  borderRadius: 8,
}));

export const Poster = styled("img")(({ theme }) => ({
  maxWidth: 500,
  maxHeight: "70vh",
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    alignSelf: "start",
    maxWidth: 300
  },
  [theme.breakpoints.down("xs")]: {
    alignSelf: "center",
  },
}));
