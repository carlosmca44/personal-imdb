import { Container, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Pagination as MuiPagination } from "@material-ui/lab";

export const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 20,
  [theme.breakpoints.down("xs")]: {
    marginTop: 30,
  },
}));

export const PageCount = styled(Typography)(() => ({
  color: "#fff",
  marginLeft: "10vw",
  marginBottom: 20,
}));

export const Pagination = styled(MuiPagination)(({ theme }) => ({
  margin: "auto",
  marginBottom: 30,
  marginTop: "5%",
  backgroundColor: "#fff",
  paddingBottom: 5,
  paddingTop: 5,
  width: "max-content",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    marginTop: "10%",
  },
}));
