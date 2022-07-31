import {
  AppBar as MuiAppBar,
  FormControl as MuiFormControl,
  IconButton,
  InputBase,
  Toolbar as MuiToolbar,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  boxShadow: "none",
  position: "static",
  [theme.breakpoints.down("xs")]: {
    marginBottom: 20,
    paddingTop: 10,
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

export const FormControl = styled(MuiFormControl)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "auto",
}));

export const Input = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: 10,
  height: 30,
  width: 400,
  minWidth: 200,
  paddingLeft: 10,
  [theme.breakpoints.down("xs")]: {
    width: 280,
  },
}));

export const ClearButton = styled(AiOutlineCloseCircle)(() => ({
  marginRight: 15,
  "&:hover": {
    cursor: "default",
  },
}));

export const GitLink = styled(IconButton)(({ theme }) => ({
  width: 50,
  height: 50,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
