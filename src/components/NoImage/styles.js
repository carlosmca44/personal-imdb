import { Box as MuiBox } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Box = styled(MuiBox)(({ theme }) => ({
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
}));
