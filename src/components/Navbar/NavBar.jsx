import {
  IconButton,
  Box,
  Menu,
  Typography,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import PersonalLogo from "../svg/Logo";
import { FaCaretDown, FaGithub, FaSearch } from "react-icons/fa";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  FormControl,
  Input,
  ClearButton,
  GitLink,
  RootContainer,
  FiltersHead,
  Filter
} from "./styles";

const NavBar = ({ query, onClickButton, onChangeValue, onChangeType, clear }) => {
  const [anchorType, setAnchorType] = useState(null);
  const [anchorYear, setAnchorYear] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const typeOptions = ["Todo", "Pelicula", "Serie"];

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
      <AppBar>
        <Toolbar>
          <PersonalLogo />
          <FormControl onSubmit={onClickButton} component="form">
            <Input
              value={query}
              onChange={onChangeValue}
              placeholder={"Buscar"}
              endAdornment={
                <ClearButton onClick={clear} />
              }
            />
            <IconButton type="submit">
              <FaSearch />
            </IconButton>
          </FormControl>
          <GitLink>
            <FaGithub />
          </GitLink>
        </Toolbar>
      </AppBar>
      <RootContainer>
        <FiltersHead component="p">
          Filtros
        </FiltersHead>
        <Box display={"flex"} justifyContent={"center"}>
          <Box margin={"0px 40px"}>
            <Tooltip arrow placement={"left"} title={"Pelicula | Serie"}>
              <Typography align={"center"}>Tipo</Typography>
            </Tooltip>
            <Filter
              aria-controls="typeMenu"
              onClick={handleClickType}
              endIcon={<FaCaretDown />}
            >
              {typeOptions[selectedIndex]}
            </Filter>
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
          <Box margin={"0px 40px"}>
            <Typography align={"center"}>Año</Typography>
            <Filter
              aria-controls="yearMenu"
              onClick={handleClickYear}
              endIcon={<FaCaretDown />}
            >
              Todos
            </Filter>
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
      </RootContainer>
    </>
  );
};

export default NavBar;
