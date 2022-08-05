import {
  AppBar as MuiAppBar,
  FormControl as MuiFormControl,
  InputBase,
  Toolbar as MuiToolbar,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  boxShadow: "none",
  position: "static",
  backgroundColor: "transparent",
  paddingTop: 30,
  paddingBottom: 30,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 20,
    paddingBottom: 0,
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    margin: "1rem 0",
  },
}));

export const Input = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: 10,
  height: 30,
  width: 400,
  minWidth: 200,
  padding: "17px 0px 17px 10px",
  boxShadow: "3px 3px 5px #d4d4d4",
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

export const GitHubIcon = styled(FaGithub)(({ theme }) => ({
  width: 40,
  height: 40,
  marginLeft: 20,
  color: "black",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
