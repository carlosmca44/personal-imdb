import {
  CardActions,
  Zoom,
  Box,
} from "@material-ui/core";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
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

  const {response, fetchData} = useAxios("t")

  const handleClickOpenDetails = () => {
    fetchData(title, null, null, "full");
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
          <DetailsButton onClick={handleClickOpenDetails}>
            Detalles
          </DetailsButton>
        </CardActions>
        <FilmsInfo
          open={open}
          close={handleClose}
          title={title}
          year={response["Year"]}
          genre={response["Genre"]}
          country={response["Country"]}
          director={response["Director"]}
          rating={response["imdbRating"]}
          poster={response["Poster"]}
          description={response["Plot"]}
        />
      </CardContent>
    </FilmCardRoot>
  );
};

export default FilmsCard;
