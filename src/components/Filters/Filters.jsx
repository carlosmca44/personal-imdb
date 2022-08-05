import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Filter, RootContainer } from "./styles";

const Filters = ({ onChangeType }) => {
  const [anchorType, setAnchorType] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const typeOptions = ["Todo", "Pelicula", "Serie"];

  const handleClickType = (event) => {
    setAnchorType(event.currentTarget);
  };

  const handleMenuItemClick = (_event, index) => {
    setSelectedIndex(index);
    setAnchorType(null);
    onChangeType(typeOptions[index]);
  };

  const handleClose = () => {
    setAnchorType(null);
  };

  return (
    <RootContainer>
        <Typography>
          Filtrar por:
        </Typography>
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
    </RootContainer>
  )
}

export default Filters