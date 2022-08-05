import { IconButton, Link } from "@material-ui/core";
import PersonalLogo from "../svg/Logo";
import { FaSearch } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  FormControl,
  Input,
  ClearButton,
  GitHubIcon
} from "./styles";
import Filters from "../Filters/Filters";

const NavBar = ({ query, onClickButton, onChangeValue, clear, changeFilter }) => {
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
                query ? <ClearButton onClick={clear} /> : <></>
              }
            />
            <IconButton style={{ display: query ? "block" : "none" }} type="submit">
              <FaSearch />
            </IconButton>
          </FormControl>
          <Filters
            onChangeType={changeFilter}
          />
          <Link href="https://github.com/carlosmca44/personal-imdb" target="blank">
            <GitHubIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
