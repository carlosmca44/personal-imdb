import { Box as MuiBox, Container, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";

export const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 20,
  [theme.breakpoints.down("xs")]: {
    marginTop: 30,
  },
}));

export const PageCount = styled(Typography)(({ theme }) => ({
  color: "#000",
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
  },
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const Pagination = styled(MuiPagination)(({ theme }) => ({
  margin: "auto",
  height: "max-content",
  width: "max-content",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    marginTop: "10%",
  },
}));
