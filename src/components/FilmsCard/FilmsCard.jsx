import {
  CardActions,
  Zoom,
  Box,
} from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import FilmsInfo from "../FilmInfoDialog/FilmsInfo";
import NoImage from "../NoImage/NoImage";
import {
  FilmCardRoot,
  CardContent,
  Tooltip,
  Tittle,
  Texts,
  DetailsButton,
  CardMedia
} from "./styles";

const FilmsCard = ({ alt, img, title, type, year }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}t=${title}&y=${year.slice(
        0,
        4
      )}&type=${type === "game" ? "" : type}&plot=full`,
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleClickOpen = () => {
    fetchData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FilmCardRoot>
      {img === "N/A" ? (
        <NoImage />
      ) : (
        <CardMedia
          alt={alt}
          image={img}
        />
      )}
      <CardContent>
        <Box>
          <Tooltip
            arrow
            title={title}
            placement="top-start"
            TransitionComponent={Zoom}
          >
            <Tittle gutterBottom variant="overline">{title}</Tittle>
          </Tooltip>
          <Texts>{type}</Texts>
          <Texts>Año: {year}</Texts>
        </Box>
        <CardActions style={{ marginLeft: "auto" }}>
          <DetailsButton onClick={handleClickOpen}>
            Detalles
          </DetailsButton>
        </CardActions>
        <FilmsInfo
          open={open}
          close={handleClose}
          title={title}
          year={data["Year"]}
          genre={data["Genre"]}
          country={data["Country"]}
          director={data["Director"]}
          rating={data["imdbRating"]}
          poster={data["Poster"]}
          description={data["Plot"]}
        />
      </CardContent>
    </FilmCardRoot>
  );
};

export default FilmsCard;
