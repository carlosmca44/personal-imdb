import { IconButton } from "@material-ui/core";
import PersonalLogo from "../svg/Logo";
import { FaGithub, FaSearch } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  FormControl,
  Input,
  ClearButton,
  GitLink
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
                <ClearButton onClick={clear} />
              }
            />
            <IconButton type="submit">
              <FaSearch />
            </IconButton>
          </FormControl>
          <Filters
            onChangeType={changeFilter}
          />
          <GitLink>
            <FaGithub />
          </GitLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
