import {
  AppBar,
  FormControl,
  Toolbar,
  IconButton,
  InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalLogo from "./Logo";
import { FaGithub, FaSearch } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    height: "max-content",
    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
      paddingTop: 10
    }
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      display: "flex",
      flexDirection: "column",
    }
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 30,
    width: 400,
    minWidth: 200,
    paddingLeft: 10,
    [theme.breakpoints.down("xs")]: {
      width: 280,
    }
  },
  gitlink: {
    width: 50,
    height: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  searchbtn: {
    
  }
}));

const NavBar = ({ query, onClickButton, onChangeValue }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <PersonalLogo />
          <FormControl className={classes.form}>
            <InputBase
              className={classes.input}
              value={query}
              onChange={onChangeValue}
              placeholder={"Buscar"}
            />
            <IconButton
              className={classes.searchbtn}
              onClick={onClickButton}
            >
              <FaSearch />
            </IconButton>
          </FormControl>
          <IconButton className={classes.gitlink}>
            <FaGithub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
