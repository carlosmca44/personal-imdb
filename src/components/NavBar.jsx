import {
  AppBar,
  FormControl,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Menu,
  Button,
  Typography,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonalLogo from "./Logo";
import { FaCaretDown, FaGithub, FaSearch } from "react-icons/fa";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    height: "max-content",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
      paddingTop: 10,
    },
  },
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
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
    },
  },
  gitlink: {
    width: 50,
    height: 50,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  filtersTitle: {
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
  },
  filtersBoxRoot: {
    color: "#c4c4c4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  },
  filtersContainer: {
    display: "flex",
    justifyContent: "center",
  },
  filter: {
    margin: "0px 40px",
  },
  filterButtons: {
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
  },
}));

const typeOptions = ["Todo", "Pelicula", "Serie"];
//const yearOptions = [];

const NavBar = ({ query, onClickButton, onChangeValue, onChangeType }) => {
  const classes = useStyles();
  const [anchorType, setAnchorType] = useState(null);
  const [anchorYear, setAnchorYear] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickType = (event) => {
    setAnchorType(event.currentTarget);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorType(null);
    onChangeType(typeOptions[index]);
  };
  const handleClose = () => {
    setAnchorType(null);
    setAnchorYear(null);
  };

  const handleClickYear = (event) => {
    setAnchorYear(event.currentTarget);
  };

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
            <IconButton className={classes.searchbtn} onClick={onClickButton}>
              <FaSearch />
            </IconButton>
          </FormControl>
          <IconButton className={classes.gitlink}>
            <FaGithub />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box className={classes.filtersBoxRoot}>
        <Typography className={classes.filtersTitle} component="p">
          Filtros
        </Typography>
        <Box className={classes.filtersContainer}>
          <Box className={classes.filter}>
            <Tooltip arrow placement={"left"} title={"Pelicula | Serie"}>
              <Typography align={"center"}>Tipo</Typography>
            </Tooltip>
            <Button
              aria-controls="typeMenu"
              onClick={handleClickType}
              className={classes.filterButtons}
              endIcon={<FaCaretDown />}
            >
              {typeOptions[selectedIndex]}
            </Button>
            <Menu
              id="typeMenu"
              anchorEl={anchorType}
              open={Boolean(anchorType)}
              onClose={handleClose}
            >
              {typeOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className={classes.filter}>
            <Typography align={"center"}>Año</Typography>
            <Button
              aria-controls="yearMenu"
              onClick={handleClickYear}
              className={classes.filterButtons}
              endIcon={<FaCaretDown />}
            >
              Todos
            </Button>
            <Menu
              id="yearMenu"
              anchorEl={anchorYear}
              open={Boolean(anchorYear)}
              onClose={handleClose}
              elevation={0}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem></MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
