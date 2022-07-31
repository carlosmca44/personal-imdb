import { Dialog, DialogTitle, Typography } from "@material-ui/core";
import NoImage from "../NoImage/NoImage";
import { DetailsContainer, InfoContent, Poster, RootContainer, SingleDetail } from "./styles";

const FilmsInfo = ({
  open,
  close,
  title,
  year,
  genre,
  country,
  director,
  rating,
  poster,
  description,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"lg"}
      open={open}
      onClose={close}
    >
      <RootContainer>
        {poster === "N/A" ? (
          <NoImage />
        ) : (
          <Poster alt="title" src={poster} />
        )}

        <InfoContent>
          <DialogTitle>{title}</DialogTitle>
          <DetailsContainer>
            Pais: <SingleDetail>{country}</SingleDetail>
            Director: <SingleDetail>{director}</SingleDetail>
            Género: <SingleDetail>{genre}</SingleDetail>
            Año: <SingleDetail>{year}</SingleDetail>
            Puntuación: <SingleDetail>{rating}</SingleDetail>
          </DetailsContainer>
          <Typography>{description}</Typography>
        </InfoContent>
      </RootContainer>
    </Dialog>
  );
};

export default FilmsInfo;
