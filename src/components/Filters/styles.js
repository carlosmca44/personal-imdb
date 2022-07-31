import { Box, Button, Typography } from "@material-ui/core";
import {styled} from "@material-ui/core/styles"

export const RootContainer = styled(Box)(({ theme }) => ({
    color: "#c4c4c4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  }));
  
  export const FiltersHead = styled(Typography)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&::after": {
      content: '""',
      backgroundColor: "#c4c4c4",
      width: "80vw",
      height: "0.5px",
      margin: "10px 0px",
    },
  }));
  
  export const Filter = styled(Button)(() => ({
    backgroundColor: "white",
    fontSize: "1em",
    padding: "2px 15px",
    borderRadius: 20,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 50%)",
      color: "#fff",
      fontWeight: "700",
    },
  }));
  