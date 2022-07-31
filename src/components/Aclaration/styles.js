import { Box, Button as MuiButton, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const RootContainer = styled(Box)(() => ({
  display: "flex",
  margin: "20px 0px",
}));

export const Button = styled(MuiButton)(() => ({
  backgroundColor: "white",
  width: 50,
  height: 50,
  borderRadius: "4px 0px 0px 4px",
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "white",
  },
}));

export const Content = styled(Paper)(({ theme }) => ({
  width: "20vw",
  padding: 20,
  margin: "auto 10px",
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    marginLeft: 10,
    marginRight: 10,
  },
}));
