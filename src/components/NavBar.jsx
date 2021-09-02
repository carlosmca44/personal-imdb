import {
  AppBar,
  FormControl,
  Toolbar,
  InputLabel,
  Input,
  colors,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalLogo from "./Logo";
import Spacer from "./Spacer";
import { FaGithub, FaSearch } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "400px",
  },
  submiteButton: {
    width: "50px",
    height: "50px",
    "&:hover": {
      width: "60px",
      height: "60px",
      transition: "0.4s",
    },
  },
}));

const NavBar = ({ query, onClickButton, onChangeValue }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <PersonalLogo />
          <Spacer />
          <FormControl variant="outlined" className={classes.form}>
            <InputLabel>Buscar</InputLabel>
            <Input
              className={classes.input}
              onChange={onChangeValue}
              value={query}
            />
            <IconButton
              className={classes.submiteButton}
              type="submite"
              onClick={onClickButton}
            >
              <FaSearch color={colors.grey[600]} />
            </IconButton>
          </FormControl>
          <Spacer />
          <IconButton className={classes.submiteButton}>
            <FaGithub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;