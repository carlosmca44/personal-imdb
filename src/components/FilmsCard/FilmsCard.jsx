import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import FilmsInfo from "../FilmInfoDialog/FilmsInfo";
import NoImage from "../NoImage/NoImage";
import {
  FilmCardRoot,
  CardContent,
  Tittle,
  CardMedia,
  CardActions
} from "./styles";

const FilmsCard = ({ alt, img, title, type, year, id }) => {
  const [open, setOpen] = useState(false);

  const { response, fetchData } = useAxios("i")

  const handleClickOpenDetails = () => {
    fetchData(id, null, null, "full")
    setOpen((open) => !open)
  }

  const handleClose = () => {
    setOpen((open) => !open)
  };

  return (
    <FilmCardRoot elevation={0}>
      <CardActions onClick={handleClickOpenDetails}>
        {img === "N/A" ? (
          <NoImage />
        ) : (
          <CardMedia
            alt={alt}
            image={img}
          />
        )}
        <CardContent>
          <Tittle align="center">{title}</Tittle>
        </CardContent>
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
    </FilmCardRoot>
  );
};

export default FilmsCard;
