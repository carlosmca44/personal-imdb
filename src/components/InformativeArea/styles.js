import { Paper, Snackbar } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const RootContainer = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
    paddingBottom: 10,
    paddingTop: 10,
  },
  width: "50vw",
  height: "50vh",
  border: "2px solid #fff",
  backgroundColor: "transparent",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#c4c4c4",
  textAlign: "center",
}));

export const Alert = styled(Snackbar)(({ theme }) => ({
  maxWidth: 600,
  [theme.breakpoints.down("sm")]: {
    width: "auto",
  },
}));
