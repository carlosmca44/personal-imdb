import { Box as MuiBox } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
  height: 250,
  width: 200,
  borderRadius: 0,
  margin: "auto",
  boxShadow: "5px 5px 5px #d4d4d4",
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: 166,
    textAlign: "center",
  },
  backgroundColor: "#454545",
  color: "#c4c4c4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
