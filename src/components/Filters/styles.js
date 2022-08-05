import { Box, Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const RootContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const Filter = styled(Button)(() => ({
  backgroundColor: "white",
  fontSize: "1em",
  padding: "2px 15px",
  borderRadius: 7,
  textTransform: "none",
  boxShadow: "3px 3px 5px #d4d4d4",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 50%)",
    cursor: "default",
  },
}));
